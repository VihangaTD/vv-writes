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
        hostname:"ideal-bass-719.convex.cloud",
        protocol:"https",
        port:"",
      },
    ]
  }
};

export default nextConfig;
