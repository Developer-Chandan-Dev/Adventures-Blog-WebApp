import { Link } from "react-router-dom";
import "../../pages/style.css";
import { useState } from "react";
import authService from "../../features/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handle Inputs
    if (!name || !email || !password) {
      return setError("Please fill all the fields");
    }

    if (password.length < 6) {
      return setError("Password must be atleast 6 characters");
    }

    const a = await authService.createAccount( name, email, password );
    console.log(a);
  };
  console.log(error);
  return (
    <section className="w-full h-screen flex-center">
      <div className=" md:w-1/2  py-3 h-screen flex-center">
        <div className="flex-center flex-col gap-y-2">
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl my-7 font-bold text-center px-2">
              Adventures Blogs
            </h1>
          </Link>
          <div className="flex-center flex-col gap-y-2">
            <h3 className="text-2xl font-bold ">Register Now</h3>
            <h3 className="text-xl font-semibold text-gray-400 text-center px-2">
              Discover the power of adventures blogs
            </h3>
          </div>
          <form
            className="my-4 flex-center flex-col gap-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="font-semibold text-gray-500">
                Name
              </label>
              <div>
                <input
                  type="text"
                  className="w-[400px] mt-2 h-[44px] rounded-lg px-3 py-1 border border-blue-300 outline-blue-300 inputBox"
                  placeholder="Enter your name"
                  required
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
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
                Sign up
              </button>
            </div>
            <div>
              <p className="font-medium drop-shadow text-center px-2">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-blue-600 underline">Sign in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 h-screen overflow-hidden signupImgBox"></div>
    </section>
  );
};

export default Signup;
