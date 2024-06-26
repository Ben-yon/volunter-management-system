/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jilt",
  theme: {
    extend: {
      screens: {
        'xsm': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: "#FFFFFF",
        secondary: '#EA0202',
        tertiary: '#FF1D1D',
        'menu-focus': '#FFFFFF29',
        'admin-secondary': '#790000',
        'admin-accent': '#00000066',
        'messages': '#16161612',
        'active-user': '#24FF00',
        'inactive-user': '#FF0000',
        'image-card': '#D9D9D9',
        'input-color': '#838383CC',
      },
      fontFamily: {
        // sans: ['Lelawadee'],
        leelawadee: ['Leelawadee', 'sans-serif']
      }
    }, 
    boxShadow: {

    },
    backgroundImage: {
      "hero":"url('/src/assets/img/slide3.jpg')",
      "hero-xsm":"url('/src/assets/img/slide2.png')",
      "details":"url('/src/assets/img/MLCS-135.jpg')",
      "success":"url('/src/assets/img/MLCS-30.jpg')",
      "admin": "url('/src/assets/img/admin.jpg')"
    }
  },
  plugins: [],
}

