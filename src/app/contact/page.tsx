  "use client";

import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-gray-900 text-white"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 headerFont">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl">
            Get in touch with us to discuss your photography needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 headerFont">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    placeholder="Tell us about your photography needs..."
                  />
                </div>
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 headerFont">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Studio Address</h3>
                    <p className="text-lg">
                      Shree Photo Fashion
                      <br />
                      Bhavnagar, Gujarat, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                    <p className="text-lg">
                      <a
                        href="tel:+911234567890"
                        className="hover:underline"
                      >
                        +91 123 456 7890
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-lg">
                      <a
                        href="mailto:info@shreephotofashion.com"
                        className="hover:underline"
                      >
                        info@shreephotofashion.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.123456789!2d72.123456789!3d21.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzU1LjYiTiA3MsKwMDcnMjguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  *Map shows approximate location in Bhavnagar, Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

