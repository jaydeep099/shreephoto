"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaHeart, FaUsers, FaCamera, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const { darkMode } = useTheme();

  const services = [
    {
      id: "wedding",
      icon: <FaHeart className="text-5xl" />,
      title: "Wedding Photography & Videography",
      description:
        "Capture every precious moment of your special day with our comprehensive wedding photography and videography services. From the pre-wedding ceremonies to the grand reception, we document your love story with artistic flair and attention to detail. Our team ensures that every emotion, every smile, and every tear is beautifully preserved for you to cherish forever.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    },
    {
      id: "portrait",
      icon: <FaUsers className="text-5xl" />,
      title: "Portrait Photography",
      description:
        "Professional portrait sessions that capture your personality and essence. Whether it&apos;s individual portraits, family photos, or professional headshots, we create stunning images that reflect who you are. Our studio provides a comfortable environment with professional lighting and backdrops to ensure the perfect shot.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    },
    {
      id: "event",
      icon: <FaCamera className="text-5xl" />,
      title: "Event Photography",
      description:
        "Document your celebrations, corporate events, parties, and special occasions with our professional event photography services. We capture candid moments, group photos, and key highlights to tell the complete story of your event. From intimate gatherings to large celebrations, we adapt to your needs.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: "commercial",
      icon: <FaBriefcase className="text-5xl" />,
      title: "Commercial Photography",
      description:
        "Elevate your business with high-quality commercial photography. We specialize in product photography, corporate headshots, business events, and marketing materials. Our commercial photography services help you showcase your brand professionally and attract more customers.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ];

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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl">
            Professional photography services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`p-8 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-50"
                    }`}
                  >
                    <div
                      className={`mb-4 ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 headerFont">
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 headerFont">
            Interested in Our Services?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your photography needs and get a
            personalized quote.
          </p>
          <Link
            href="/contact"
            className={`inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
              darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

