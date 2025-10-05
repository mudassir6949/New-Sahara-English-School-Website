"use client";
import React, { useState } from "react";

export default function AdmissionForm({
  onSubmit,
  onGoToParentsLogin,
}: {
  onSubmit?: () => void;
  onGoToParentsLogin?: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    parentName: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admission Form Submitted:", formData);
    if (onSubmit) onSubmit();
    alert("Admission form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade Applying For"
          value={formData.grade}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="parentName"
          placeholder="Parent/Guardian Name"
          value={formData.parentName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Switch to login */}
      <p className="text-center mt-4">
        Already registered?{" "}
        <button
          onClick={onGoToParentsLogin}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Parents Login
        </button>
      </p>
    </div>
  );
}
