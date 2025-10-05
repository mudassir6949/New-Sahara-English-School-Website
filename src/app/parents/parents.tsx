"use client";
import React, { useState } from "react";

type Props = {
  onSubmit?: () => void;
  onGoToAdmission?: () => void;
};

export default function ParentsLogin({ onSubmit, onGoToAdmission }: Props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Parent Login:", formData);
    alert("Login Successful!");
    if (onSubmit) onSubmit();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Parents Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Parent Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      {/* Switch to Admission */}
      <p className="text-center mt-4">
        New user?{" "}
        <button
          onClick={onGoToAdmission}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Admission Form
        </button>
      </p>
    </div>
  );
}
