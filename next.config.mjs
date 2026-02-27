/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized: true
  },
  env: {
    API_URL: "https://api-joaobastosterapiainteligente-pi.vercel.app/",
    SECRET_KEY: 'sitejoao2024',
  }
}

export default nextConfig;
