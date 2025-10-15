"use client";
import { useState } from "react";
import HelpSupportTabs from "./HelpSupportTabs";
import FAQAccordion from "./FAQAccordion";
import FAQCategoryTabs from "./FAQCategoryTabs";
import ContactForm from "./ContactForm";
import ContactPage from "./ContactPage";
import ReportIssueForm from "./ReportIssueForm";

export default function HelpSupportContent() {
  const [activeTab, setActiveTab] = useState("FAQ");
  const [activeCategory, setActiveCategory] = useState("General");

  // Sample categorized FAQs 
  const categorizedFaqs: Record<string, { question: string; answer: string }[]> = {
    General: [
      {
        question: "What is Sync & Explore?",
        answer: "Sync & Explore is your travel assistant platform for easy booking and support.",
      },
      {
        question: "How can I reset my password?",
        answer: "Click on ‘Forgot Password’ from the login page and follow the instructions.",
      },
    ],
    Service: [
      {
        question: "What services do you provide?",
        answer: "We provide travel bookings, itinerary planning, and real-time updates.",
      },
    ],
    Dashboard: [
      {
        question: "Can I customize my dashboard view?",
        answer: "Yes, your dashboard layout can be customized from the settings section.",
      },
    ],
    Miscellaneous: [
      {
        question: "Do you offer referral benefits?",
        answer: "Yes! Invite your friends to earn exciting rewards.",
      },
    ],
  };

  const faqsToShow = categorizedFaqs[activeCategory] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>

      <div className="mt-4">
        <HelpSupportTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="mt-6">
        {activeTab === "FAQ" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: FAQ Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
              
              <FAQCategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              <FAQAccordion faqs={faqsToShow} />
            </div>

            <div className="bg-[#E0F7F8] p-6 rounded-xl relative">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Still have questions?
              </h3>
              <ContactForm showPhone={false} />
            </div>
          </div>
        )}

        {activeTab === "Contact Us" && (
          <div className="mt-4">
            <ContactPage />
          </div>
        )}

        {activeTab === "Report Issues" && (
          <div className="mt-4">
            <ReportIssueForm />
          </div>
        )}
      </div>
    </div>
  );
}
