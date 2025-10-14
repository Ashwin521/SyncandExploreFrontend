"use client";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
// import SupportCards from "./SupportCards";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Help & Support</h1>
        <div className="mt-2 flex space-x-8 border-b border-gray-200">
          <button className="pb-2 text-gray-600 hover:text-gray-900">FAQ</button>
          <button className="pb-2 border-b-2 border-[#00B3BB] text-[#00B3BB] font-semibold">
            Contact Us
          </button>
          <button className="pb-2 text-gray-600 hover:text-gray-900">Report Issues</button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <ContactInfo />
          <SupportCards />
        </div>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
