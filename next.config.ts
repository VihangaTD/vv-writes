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
        hostname:"kindly-hippopotamus-908.eu-west-1.convex.cloud",
        protocol:"https",
        port:"",
      },
    ]
  }
};

export default nextConfig;
