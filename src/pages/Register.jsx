import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center ">
        <motion.div
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="login"
        >
          <div className="w-120 h-140 shadoww bg-white rounded flex flex-col items-center justify-center gap-5 ">
            <h1 className="h1login mb-5">REGISTER</h1>
            <input
              type="text"
              placeholder="username"
              className="outline-2 py-3 px-4 w-[80%] text-md rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
            <input
              type="password"
              placeholder="password"
              className="outline-2 py-3 px-4 w-[80%] text-md rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
            <input
              type="password"
              placeholder="confrim password"
              className="outline-2 py-3 px-4 w-[80%] text-md rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
            <button className="hover:bg-blue-950 cursor-pointer px-40 rounded py-3 bg-blue-900 shadow-lg  text-white font-bold mt-5">
              Register
            </button>
            <button className="px-7 rounded-full py-2 bg-white border shadow-lg  text-black font-semibold flex items-center gap-3 cursor-pointer hover:bg-gray-300">
              <FcGoogle size={20} /> With Google Account
            </button>
            <p className="text-sm">
              have an account?{" "}
              <Link to={"/"} className="text-blue-800">
                login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
