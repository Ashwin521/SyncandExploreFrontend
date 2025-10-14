"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface FAQAccordionProps {
  faqs?: { question: string; answer: string }[];
}

export default function FAQAccordion({ faqs = [] }: FAQAccordionProps) {
  const defaultFaqs = [
    {
      question: "What is Sync & Explore?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel urna quis elit efficitur facilisis. Integer volutpat turpis a nisl gravida, et varius mi tristique.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt ligula in tellus aliquet, in bibendum neque feugiat. Nullam ac mauris magna.",
    },
    {
      question: "Is there a refund policy available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida mauris vel sapien pulvinar, in rhoncus nulla porta. Suspendisse potenti.",
    },
    {
      question: "Can I modify my travel booking?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac arcu euismod, euismod nunc nec, convallis ante. Proin volutpat arcu in justo tincidunt viverra.",
    },
    {
      question: "How secure is my personal information?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis nisl ac tellus feugiat, in sodales massa suscipit. Integer a vestibulum eros.",
    },
  ];

  const allFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="space-y-3">
      {allFaqs.map((faq, i) => (
        <AccordionItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

// Accordion Item Component
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          duration: 0.4,
          opacity: 1,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.4,
          opacity: 0,
          ease: "power2.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-md bg-white shadow-sm overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 font-semibold text-gray-800 focus:outline-none"
      >
        {question}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      <div ref={contentRef} className="px-4 h-0 opacity-0">
        <p className="text-gray-600 py-2 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
