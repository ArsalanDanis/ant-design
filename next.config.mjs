/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      // Add a rule to transpile Ant Design icons
      config.module.rules.push({
        test: /\.js$/,
        include: [
          /node_modules\/@ant-design\/icons/,
          /node_modules\/@ant-design\/icons-svg/,
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
