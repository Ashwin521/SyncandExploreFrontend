"use client";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

export default function ContactForm() {
  // Zod schema for validation
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone is required"),
    message: z.string().min(1, "Message is required"),
  });

  // Form state to hold values for each field
  const [formData, setFormData] = useState({
    name: "Sam-yuk",
    email: "hello@gmail.in",
    phone: "",
    message: "",
  });

  // Error state to hold validation messages
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  // Handle input change
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
    console.log("Form submitted", formData);
    // Reset only phone and message after submission
    setFormData({ ...formData, phone: "", message: "" });
  };

  return (
    <div className="bg-[#E0F7FA] p-8 rounded-2xl w-full md:w-[400px]">
      <div className="flex items-center mb-4">
        <Image src="/plane-icon.svg" alt="Plane" width={32} height={32} className="mr-2" />
        <h2 className="text-xl font-semibold">Get in touch</h2>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className={`w-full p-2 pl-10 border rounded-md outline-none bg-[#F8FCFC] ${errors.name ? "border-red-500" : "border-[#B2DFDB]"}`}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/user-icon.png" alt="User Icon" width={20} height={20} />
          </div>
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className={`w-full p-2 pl-10 border rounded-md outline-none bg-[#F8FCFC] ${errors.email ? "border-red-500" : "border-[#B2DFDB]"}`}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/email-icon.png" alt="Email Icon" width={20} height={20} />
          </div>
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="✆ XXX XXXXX-XXXXX"
            className={`w-full p-2 pl-10 border rounded-md outline-none bg-[#F8FCFC] ${errors.phone ? "border-red-500" : "border-[#B2DFDB]"}`}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/phone-icon.png" alt="Phone Icon" width={20} height={20} />
          </div>
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please type your message here."
            className={`w-full p-2 pl-10 border rounded-md outline-none resize-none bg-[#F8FCFC] ${errors.message ? "border-red-500" : "border-[#B2DFDB]"}`}
            rows={4}
          />
          <div className="absolute left-2 top-2.5">
            <Image src="/message-icon.png" alt="Message Icon" width={20} height={20} />
          </div>
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-[#0097A7] font-bold py-2 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
)};

