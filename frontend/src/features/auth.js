// import axios from "axios";

export class AuthService {
  async createAccount({ email, password, name }) {
    try {
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res) {
        // call another method
        return this.login(email, password);
      } else {
        return res;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async login({ email, password }) {
    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res) {
        return res;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

const authService = new AuthService();

export default authService;
