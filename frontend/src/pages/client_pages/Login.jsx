import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../features/auth";
import { login } from "../../store/features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handle Inputs
    if (!email || !password) {
      return setError("Please fill all the fields");
    }

    if (password.length < 6) {
      return setError("Password must be atleast 6 characters");
    }

    const res = await authService.login(email, password);
    if (res.data.success === true) {
      // Dispatch the login action
      dispatch(login(res.data.user));
      setEmail("");
      setPassword("");
      navigate("/");
    } else if (res.data.success === false) {
      setError(res.data.error);
    } else {
      console.log(res);
      setError("Something went wrong");
    }
  };

  return (
    <section className="w-full h-screen flex-center">
      <div className=" lg:w-1/2  py-3 h-screen flex-center">
        <div className="flex-center flex-col gap-y-2">
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl my-7 font-bold text-center px-2">
              Adventures Blog
            </h1>
          </Link>
          <div className="flex-center flex-col gap-y-2 px-5">
            <h3 className="text-xl sm:text-2xl font-bold ">Sign in</h3>
            <h3 className="text-lg text-center sm:text-xl font-semibold text-gray-400">
              Discover the power of adventures blogs
            </h3>
            <div className={`h-8 flex-center ${error && "bg-red-50"} px-3`}>
              {error && <p className="py-3 text-red-500">{error}</p>}
            </div>
          </div>
          <form
            className="my-4 flex-center flex-col gap-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="font-semibold text-gray-500">
                Email
              </label>
              <div>
                <input
                  type="email"
                  className="w-[400px] mt-2 h-[44px] rounded-lg px-3 py-1 border border-blue-300 outline-blue-300 inputBox"
                  placeholder="Enter your email"
                  required
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="font-semibold text-gray-500">
                Password
              </label>
              <div>
                <input
                  type="password"
                  className="w-[400px] mt-2 h-[44px] rounded-lg px-3 py-1 border border-blue-300 outline-blue-300 inputBox"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                className="w-[400px] h-[44px] rounded-lg bg-[#7795f8] text-white font-semibold py-1 inputBox"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div>
              <p className="font-medium drop-shadow px-3 text-center">
                Don&apos;t have an account?{" "}
                <Link to="/signup">
                  <span className="text-blue-600 underline">Sign Up</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 py-3 h-screen signupImgBox loginBox"></div>
    </section>
  );
};

export default Login;
