import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/slices/authSlice";

const SignUpForm = ({ handleSignInButton, gotoIndexPage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(formData, gotoIndexPage));
  };

  return (
    <div
      className="relative w-[400px] h-[520px] p-8 rounded-2xl shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
      }}
    >
      <h1 className="font-bold text-3xl text-white mb-6 text-center">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#2575fc] bg-white/80 text-[#333] shadow"
          required
          minLength={2}
          maxLength={40}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#2575fc] bg-white/80 text-[#333] shadow"
          required
          minLength={2}
          maxLength={40}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#2575fc] bg-white/80 text-[#333] shadow"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#2575fc] bg-white/80 text-[#333] shadow w-full"
            required
            minLength={8}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2575fc] text-lg"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#2575fc] bg-white/80 text-[#333] shadow w-full"
            required
            minLength={8}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2575fc] text-lg"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-[#2575fc] to-[#6a11cb] rounded-full text-white font-semibold shadow-lg transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-white">Already here?</span>
        <button
          className="ml-2 p-2 text-base font-bold text-[#2575fc] bg-white/80 rounded hover:bg-[#ff6a00] hover:text-white transition-all duration-300"
          onClick={handleSignInButton}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
