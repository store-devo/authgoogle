import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../supabase";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });

    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center ">
        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="login"
        >
          <div className="w-120 h-120 shadoww bg-white rounded flex flex-col items-center justify-center gap-5 ">
            <h1 className="h1login mb-7">LOGIN</h1>
            <input
              type="text"
              placeholder="username"
              className="outline-2 py-3 px-4 w-[80%] text-md rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md mb-3"
            />
            <input
              type="password"
              placeholder="password"
              className="outline-2 py-3 px-4 w-[80%] text-md rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
            <button className="px-30 rounded py-3 bg-blue-900 shadow-lg  text-white font-bold mt-5 ">
              Login
            </button>
            <button
              onClick={handleLogin}
              className="px-7 rounded-full py-2 bg-white border shadow-lg  text-black font-semibold flex items-center gap-3 cursor-pointer hover:bg-gray-300"
            >
              <FcGoogle size={20} /> With Google Account
            </button>
            <p className="text-sm">
              don't have an account yet?{" "}
              <Link to={"/register"} className="text-blue-800">
                Register
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
