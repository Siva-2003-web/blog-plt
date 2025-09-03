import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
const LoginForm = ({ handleSignUpButton, gotoIndexPage }) => {
  const { loading } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData, gotoIndexPage));
  };

  return (
    <div
      className="relative w-[400px] h-[420px] p-8 rounded-2xl shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      }}
    >
      <h1 className="font-bold text-3xl text-white mb-6 text-center">Login</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#ff6a00] bg-white/80 text-[#333] shadow"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#ff6a00] bg-white/80 text-[#333] shadow w-full"
            required
            minLength={8}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff6a00] text-lg"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full text-white font-semibold shadow-lg transition-all duration-300"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-white">New here?</span>
        <button
          className="ml-2 p-2 text-base font-bold text-[#ff6a00] bg-white/80 rounded hover:bg-[#2575fc] hover:text-white transition-all duration-300"
          onClick={handleSignUpButton}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
