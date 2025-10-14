import React from "react";
import ContactForm from "./ContactForm";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const ContactPage: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row gap-8 items-start mt-8 w-full">
			<div className="flex-1">
				<h2 className="font-bold text-3xl mb-2">Contact Us</h2>
				<p className="text-black mb-6">
					Whether it's a quick query or detailed travel planning, we'd love to hear from you.<br />
					Reach out and let's make your journey seamless and memorable.
				</p>
				<div className="flex flex-col gap-5 mb-8">
					<div className="flex items-center gap-3">
						<MdLocationOn size={28} className="text-cyan-700" />
						<div>
							<div className="font-semibold">Location</div>
							<div className="text-sm">New Delhi, India</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<MdEmail size={28} className="text-cyan-700" />
						<div>
							<div className="font-semibold">Email us</div>
							<div className="text-sm">syncnexplore@gmail.com</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<MdPhone size={28} className="text-cyan-700" />
						<div>
							<div className="font-semibold">Call Us</div>
							<div className="text-sm">+91 12345-67890</div>
						</div>
					</div>
				</div>
				<div className="flex gap-6">
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
			</div>
			<div className="w-full md:max-w-md">
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactPage;
