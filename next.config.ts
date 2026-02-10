import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents:true,
  images:{
    remotePatterns:[
      {
        hostname:"images.pexels.com",
        protocol:"https",
        port:"",
      },
      {
        hostname:"groovy-setter-318.convex.cloud",
        protocol:"https",
        port:"",
      },
    ]
  }
};

export default nextConfig;
