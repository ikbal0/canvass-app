/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/css-in-js/wrongsource',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
