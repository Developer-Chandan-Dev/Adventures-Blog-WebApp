import axios from "axios";

export class AuthService {
  async createAccount(username, email, password) {
    try {
      const res = await axios.post("/api/v1/auth/signup", {
        username,
        email,
        password,
      });

      if (res.data.status === true) {
        // call another method

        return res;
      } else {
        return res;
      }
    } catch (error) {
      // console.log(error.response.data.error);
      return error.response;
    }
  }

  async login(email, password) {
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      console.log(res);
      if (res) {
        console.log(res.data.message);
        return res;
      }
    } catch (error) {
      return error.response;
    }
  }

  async logout() {
    try {
      const res = await axios.post("/api/v1/auth/logout");
      return res;
    } catch (error) {
      return error.response;
    }
  }
}

const authService = new AuthService();

export default authService;
