import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    name: localStorage.getItem("name") || "",
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "",
  }),
  getters: {
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
    setAuthenticated: (state) => state.isAuthenticated,
    getToken: (state) => state.token,
    getRole: (state) => state.role,
    getName: (state) => state.name,
  },
  actions: {
    async login() {
      const apiUrl = import.meta.env.VITE_APP_API_URL;
      try {
        const response = await axios.post(apiUrl + "login", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          this.token = response.data.token;
          this.isAuthenticated = true;
          this.role = response.data.user.role;
          this.name = response.data.user.name;
          this.email = response.data.user.email;
          localStorage.setItem("token", this.token);
          localStorage.setItem("email", this.email);
          localStorage.setItem("password", this.password);
          localStorage.setItem("role", this.role);
          localStorage.setItem("isAuthenticated", true);

          if (this.role === "user") {
            router.push("/");
          } else if (this.role === "admin") {
            router.push("/dashboard");
          }
          setAuthenticated(true);
        } else {
          window.alert("فشل تسجيل الدخول");
        }
      } catch (error) {
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
        if (error.response && error.response.status === 401) {
          window.alert("البريد الالكتروني او كلمة المرور غير صحيحة");
          this.email = "";
          this.password = "";
        }
      }
    },
    async register() {
      const apiUrl = import.meta.env.VITE_APP_API_URL;
      try {
        const response = await axios.post(apiUrl + "register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.isAuthenticated = true;
        this.role = "user";
        this.name = response.data.user.name;
        localStorage.setItem("name", this.name);
        if (this.isAuthenticated) {
          window.alert("تم التسجيل بنجاح");
          router.push("/");
        }
      } catch (error) {
        alert("فشل التسجيل");
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      }
    },

    async logout() {
      const apiUrl = import.meta.env.VITE_APP_API_URL;

      try {
        if (!this.token) {
          throw new Error("No token found");
        }

        const response = await axios.post(
          "http://127.0.0.1:8000/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(localStorage.getItem("token"));

        if (response.status === 200) {
          window.alert("تم تسجيل الخروج بنجاح");
        } else {
          window.alert(" تسجيل الخروج");
        }
      } catch (error) {
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
        window.alert(" تسجيل الخروج");
      } finally {
        // Clear all session data and redirect
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("role");
        this.token = "";
        this.role = "";
        this.email = "";
        this.password = "";
        this.isAuthenticated = false;

        // Redirect to login page
        router.push("/login");
      }
    },
  },
  persist: {
    enabled: true,
  },
});
