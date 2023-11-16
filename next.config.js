/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "*.shopify.com",
			},
		],
		//loader: "custom",
		//loaderFile: "./components/loader.js",
	},
};

module.exports = nextConfig;
