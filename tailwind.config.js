module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      sans: ["Roboto", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      title: ["Kdam Thmor Pro", "sans-serif"],
      body: ['"Open Sans"'],
    },
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
