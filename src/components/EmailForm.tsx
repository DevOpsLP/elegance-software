import React, { useState, useEffect, useRef } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Required for JSON body
        },
        body: JSON.stringify(formData), // Stringify the data
      });
  
      if (!response.ok) {
        throw new Error("Failed to send the message");
      }
  
      setIsSubmitted(true);
      setFormData({ userEmail: "", subject: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Yellow Section */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-500"></div>

      {/* Form Container */}
      <div
        ref={formRef}
        className={`relative flex items-center justify-center min-h-screen transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-slate-50 rounded-3xl shadow-lg p-8 md:p-16 max-w-3xl">
          {/* Form Heading */}
          <h1 className="text-4xl font-bold mb-4 text-center text-primary-800">
            Contact <span className="italic"> Us</span>
          </h1>
          <p className="text-center text-gray-800 mb-6">
            Got a question? Send us a message and we’ll get back to you{" "}
            <span className="italic tracking-widest">ASAP!</span>
          </p>

          {/* Success Message */}
          {isSubmitted && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center">
              Thank you! Your message has been sent.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          {/* Contact Form */}
          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="py-4 px-6 rounded-full bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject / Topic"
                required
                className="py-4 px-6 rounded-full bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="py-4 px-6 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none h-32"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`py-4 px-6 rounded-full transition ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
