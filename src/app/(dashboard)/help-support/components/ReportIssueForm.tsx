"use client";
import React, { useState } from "react";

export default function ReportIssueForm() {
  const [issueType, setIssueType] = useState("Performance Issue");
  const [query, setQuery] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 w-full max-w-2xl md:ml-0 md:mr-auto md:w-[771px]">
      <h2 className="text-2xl font-bold mb-2">Raise Ticket</h2>
      <p className="mb-6 text-gray-700">Help us by reporting any bugs or issues you have encountered.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">Select Issue type: <span className="text-red-500">*</span></label>
          <select
            className="w-full border rounded-md p-2"
            value={issueType}
            onChange={e => setIssueType(e.target.value)}
          >
            <option>Performance Issue</option>
            <option>UI Bug</option>
            <option>Feature Request</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Enter your query <span className="text-red-500">*</span></label>
          <textarea
            className="w-full border rounded-md p-2 resize-none"
            rows={4}
            placeholder="Please type your query here."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Attach File:</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mb-2">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mb-2 text-gray-400"><path d="M12 16v-8m0 0l-4 4m4-4l4 4"/></svg>
            <p className="text-gray-500 text-sm mb-2">Drag and drop your files here.<br/>Files supported: JPG, PNG, PDF</p>
            <span className="text-gray-400 mb-2">or</span>
            <label className="bg-teal-600 text-white px-4 py-1 rounded cursor-pointer">
              Browse Files
              <input type="file" accept=".jpg,.png,.pdf" className="hidden" onChange={handleFileChange} />
            </label>
            {file && <span className="mt-2 text-sm text-gray-700">Selected: {file.name}</span>}
          </div>
        </div>
        <button type="submit" className="w-full bg-teal-600 text-white font-bold py-2 rounded-full text-lg">Submit</button>
      </form>
    </div>
  );
}
