import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from mobile devices on local network for testing
  allowedDevOrigins: [
    "192.168.1.14", // Your mobile device IP
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
