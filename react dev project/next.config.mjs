/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/placements',
            permanent: true,
          },
        ]
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qspiderwebsite.s3.ap-south-1.amazonaws.com',
                port: '',
                // pathname: '/COURSE/IMAGE/**',
            },
        ],
    },
};

export default nextConfig;
