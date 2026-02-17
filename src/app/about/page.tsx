"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaAward, FaCamera, FaUsers, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const { darkMode } = useTheme();

  const achievements = [
    {
      icon: <FaAward className="text-4xl" />,
      title: "Years of Experience",
      value: "15+",
      description: "Serving clients in Bhavnagar and beyond",
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Photography Sessions",
      value: "1000+",
      description: "Successfully completed projects",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Happy Clients",
      value: "500+",
      description: "Satisfied customers and counting",
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Weddings Captured",
      value: "300+",
      description: "Beautiful wedding memories created",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 headerFont text-white drop-shadow-2xl`}
          >
            About Us
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-2xl text-gray-200 drop-shadow-lg`}
          >
            Capturing Life&apos;s Moments with Passion and Excellence
          </p>
        </div>
      </section>

      {/* Studio Story */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center headerFont">
            Our Story
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Shree Photo Fashion was founded with a simple yet powerful vision:
              to capture life&apos;s most precious moments with artistry,
              passion, and professionalism. Based in the heart of Bhavnagar,
              Gujarat, we have been serving clients across the region for over
              15 years.
            </p>
            <p>
              What started as a small photography studio has grown into a trusted
              name in the photography industry, known for our commitment to
              excellence and our ability to tell stories through images. We
              believe that every moment is unique and deserves to be preserved
              in the most beautiful way possible.
            </p>
            <p>
              Our journey has been marked by countless weddings, celebrations,
              and milestones that we&apos;ve had the privilege to document. Each
              project is approached with fresh eyes and creative vision,
              ensuring that your memories are captured in a way that reflects
              your personality and style.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center headerFont">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-center">
            <p>
              Our mission is to create timeless photographs that not only
              document moments but also evoke emotions and tell stories. We
              strive to exceed expectations by combining technical expertise with
              artistic vision, ensuring that every client receives images they
              will treasure for a lifetime.
            </p>
            <p>
              We are committed to providing exceptional service, from the
              initial consultation to the final delivery. Our team works closely
              with each client to understand their vision and bring it to life
              through our photography.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center headerFont">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                Lead Photographer
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                With over 15 years of experience in wedding and portrait
                photography, our lead photographer brings creativity and expertise
                to every shoot.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                  alt="Videographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                Videographer
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Specializing in cinematic wedding videos and event coverage, our
                videographer captures the essence of your special moments in
                motion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center headerFont">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg text-center ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-lg"
                }`}
              >
                <div
                  className={`mb-4 flex justify-center ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className={`py-16 px-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 headerFont">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl mb-8">
            Ready to capture your special moments? Get in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                darkMode
                  ? "bg-transparent border-2 border-white hover:bg-white/10"
                  : "bg-transparent border-2 border-black hover:bg-black/10"
              }`}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

