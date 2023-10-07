/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  publicRuntimeConfig: {
		// eslint-disable-next-line turbo/no-undeclared-env-vars -- is in .env
		BACKEND_SERVICE_URL: process.env.BACKEND_SERVICE_URL,
	},
};

module.exports = config;