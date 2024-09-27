import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full h-screen flex-center">
      <div className=" lg:w-1/2  py-3 h-screen flex-center">
        <div className="flex-center flex-col gap-y-2">
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl my-7 font-bold text-center px-2">Adventures Blog</h1>
          </Link>
          <div className="flex-center flex-col gap-y-2 px-5">
            <h3 className="text-xl sm:text-2xl font-bold ">Sign in</h3>
            <h3 className="text-lg text-center sm:text-xl font-semibold text-gray-400">
              Discover the power of adventures blogs
            </h3>
          </div>
          <form className="my-4 flex-center flex-col gap-y-5">
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
