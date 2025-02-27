import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};


module.exports = {
   compress: true,
    
};

export default nextConfig;
