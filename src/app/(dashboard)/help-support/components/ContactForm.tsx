"use client";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

export default function ContactForm({ showPhone = true }: { showPhone?: boolean }) {
  // Zod schema for validation
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone is required"),
    message: z.string().min(1, "Message is required"),
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "Sam-yuk",
    email: "hello@gmail.in",
    phone: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof typeof formData, string>> = {};
      result.error.issues.forEach((err: z.ZodIssue) => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof typeof formData] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);

    // Reset phone and message only
    setFormData({ ...formData, phone: "", message: "" });
  };

  return (
    <div className="bg-[#E0F7FA] p-8 rounded-2xl w-full md:w-[400px] relative overflow-hidden">
      {/* ✈️ Airplane icon */}
      <Image
        src="/icons/airplane.png" // Make sure this file exists in /public/icons/
        alt="Airplane Icon"
        width={64}
        height={64}
        className="absolute -top-8 left-1/2 -translate-x-1/2"
      />

      {/* Title */}
      <div className="flex items-center justify-center mb-4 mt-8">
        <h2 className="text-2xl font-semibold text-black">Still have questions?</h2>
      </div>

      {/* Contact form */}
      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className={`w-full p-2 pl-10 border rounded-md outline-none bg-[#F8FCFC] ${
              errors.name ? "border-red-500" : "border-[#B2DFDB]"
            }`}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/icons/ContactImage.png" alt="User Icon" width={20} height={20} />
          </div>
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className={`w-full p-2 pl-10 border rounded-md outline-none bg-[#F8FCFC] ${
              errors.email ? "border-red-500" : "border-[#B2DFDB]"
            }`}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/icons/Artcon.png" alt="Email Icon" width={20} height={20} />
          </div>
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone field (optional) */}
        {showPhone && (
          <div className="relative">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="✆ XXX XXXXX-XXXXX"
              className={`w-full p-2 pl-10 border rounded-md outline-none bg-[#F8FCFC] ${
                errors.phone ? "border-red-500" : "border-[#B2DFDB]"
              }`}
            />
            <div className="absolute left-2 top-2.5">
              <Image src="/sidebar/passenger.svg" alt="Phone Icon" width={20} height={20} />
            </div>
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
          </div>
        )}

        {/* Message field */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please type your query here."
            className={`w-full p-2 pl-10 border rounded-md outline-none resize-none bg-[#F8FCFC] ${
              errors.message ? "border-red-500" : "border-[#B2DFDB]"
            }`}
            rows={4}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/icons/message_icon.svg" alt="Message Icon" width={20} height={20} />
          </div>
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-[#0097A7] font-bold py-2 rounded-full hover:bg-[#B2EBF2] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
