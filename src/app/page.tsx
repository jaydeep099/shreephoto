"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { FaCamera, FaHeart, FaUsers, FaBriefcase } from "react-icons/fa";

export default function Home() {
  const { darkMode } = useTheme();

  const featuredServices = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Wedding Photography",
      description: "Capture your special day with beautiful, timeless memories",
      link: "/services#wedding",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Portrait Photography",
      description: "Professional portraits that showcase your personality",
      link: "/services#portrait",
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Event Photography",
      description: "Document your celebrations and special moments",
      link: "/services#event",
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: "Commercial Photography",
      description: "Professional photography for your business needs",
      link: "/services#commercial",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Full-Width Photography */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 headerFont ${
              darkMode ? "text-white" : "text-white"
            } drop-shadow-2xl`}
          >
            Shree Photo Fashion
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-2xl ${
              darkMode ? "text-gray-200" : "text-gray-100"
            } drop-shadow-lg`}
          >
            Capturing Life&apos;s Most Precious Moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-white text-black hover:bg-gray-100"
              } shadow-xl`}
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-transparent border-2 border-white text-white hover:bg-white/10"
                  : "bg-transparent border-2 border-white text-white hover:bg-white/10"
              } shadow-xl`}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Intro Section */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 headerFont">
            Welcome to Shree Photo Fashion
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Based in Bhavnagar, Gujarat, we are a premier photography studio
            dedicated to capturing your most cherished moments with artistry and
            passion.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            With years of experience in wedding photography, portrait sessions,
            event coverage, and commercial photography, we bring a unique blend
            of creativity and professionalism to every project. Our team is
            committed to delivering stunning visuals that tell your story and
            preserve your memories for generations to come.
          </p>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center headerFont">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`group p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`mb-4 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className={`inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-all ${
                darkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-gray-900 text-white"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 headerFont">
            Ready to Create Beautiful Memories?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss your photography needs and bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-transparent border-2 border-white hover:bg-white/10"
                  : "bg-transparent border-2 border-white hover:bg-white/10"
              }`}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

