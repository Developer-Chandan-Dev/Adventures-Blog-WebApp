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

        return this.login(email, password);
      } else {
        return res;
      }
    } catch (error) {
      console.log(error.response.data.error);
      return error;
    }
  }

  async login(email, password) {
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      if (res) {
        console.log(res.data.message);
        return res;
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.error);
      return error;
    }
  }
}

const authService = new AuthService();

export default authService;
