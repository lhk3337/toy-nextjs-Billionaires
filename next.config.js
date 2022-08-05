const { NEXT_PUBLIC_API_URL } = process.env;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["specials-images.forbesimg.com", "undefined"],
  },
  async rewrites() {
    return [
      {
        source: "/api/person",
        destination: NEXT_PUBLIC_API_URL,
      },
      {
        source: "/api/person/:id",
        destination: `${NEXT_PUBLIC_API_URL}/person/:id`,
      },
    ];
  },
};
