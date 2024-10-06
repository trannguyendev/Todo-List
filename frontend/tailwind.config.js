/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "typing":{
          "0%":{
            width: "0",
          },
          "100%":{
            width: "100%",
          },
        },
      },
      animation: {
        fadeindown: "fade-in-down 1s ease-in 0.25s 1",
        fadeinleft: "fade-in-left 1s ease-in-out 0.25s 1",
        typing: "typing 2s ease-in 1s forwards",
      },
      backgroundColor: {
        "primary-light": "#FFFFFF", // Nền chính light
        "secondary-light": "#F1F5F9", // Nền phụ light
        "tertiary-light": "#E5E7EB", // Màu thứ ba light
        "button-light": "#1F51FF", // Nền nút khi hover light
      },
      colors: {
        "primary-light": "#0A0A23", // Màu chính light
        "accent-light": "#1C1C3A", // Màu nhấn light
        "textPrimary-light": "#232946", // Văn bản chính light
        "textSecondary-light": "#3949AB", // Văn bản phụ light
      },
      backgroundImage: {
        "login-img": "url('https://wallpapercrafter.com/sizes/1366x768/108198-purple-nature-colorful-trees-forest-smoke-mist-artwork.jpg')",
        "signup-img":"url('https://img.freepik.com/premium-photo/stunning-sunset-landscape-mountains-forests-cabincore_899449-28639.jpg')",
        "home-img": "url('https://img.freepik.com/premium-photo/abstract-bright-landscape-exotic-scene-digital-generated-tourism-travel-theme-illustration_840789-2251.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697155200&semt=ais')",
        
      },
      brightness: {
        75: "75%", // Độ sáng dark
        90: "90%", // Độ sáng light
      },
      blur: {
        "sm-light": "2px", // Blur light
      },
    },
    plugins: [],
  },
};