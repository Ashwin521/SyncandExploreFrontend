import React from "react";

const SupportCards = () => {
  return (
    <div className="flex gap-4 mt-6">
      <div className="bg-[#F8FCFC] rounded-xl p-5 flex-1 shadow-sm">
        <div className="font-semibold mb-2">Customer Support</div>
        <div className="text-sm">
          Our support team is available around the clock to help you with any queries.
        </div>
      </div>
      <div className="bg-[#F8FCFC] rounded-xl p-5 flex-1 shadow-sm">
        <div className="font-semibold mb-2">Feedback and Suggestions</div>
        <div className="text-sm">
          We value your important feedbacks and are continuously working towards improving ourselves to help you better.
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
