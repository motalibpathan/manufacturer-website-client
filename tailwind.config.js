module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f85606",
          secondary: "#3a434d",
          accent: "#f5f5f5",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
