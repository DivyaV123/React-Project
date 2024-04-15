/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        backgroundBlue: '#DEE6FE4D',
        "border-gray": '#A0A0A0',
        'footer-blue': '#002248',
        'dark-gray': '#454545',
        'brown': '#4D2121',
        'ash': '#575757',
        'white': '#FFFFFF',
        'header-orange': 'bg-gradient-to-b from-transparent to-[#F09819] via-[#FF512F]',
        border: "#FF512F",
        input: "#FF512F",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "#FF512F",
        },
        secondary: {
          DEFAULT: "#FF512F",
          foreground: "white",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },screens: {
        '3xl': '1920px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      keyframes: {
        scrollAnimation: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        scrollAnimation: 'scrollAnimation 2500s linear infinite',
        "accordion-up": "accordion-up 0.2s ease-out",
        'hover-underline-animation:hover::after': '@apply transform scaleX(1) origin-bottom-left',
        "hover-underline-animation::after": '@apply absolute w-full transform scaleX(0) h-2 bottom-0 left-0 bg-yellow-400 origin-bottom-right transition-transform ease-out duration-250',
      },
      
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '#000000',
    },
    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    backgroundImage: {
      'illustrate_wave': "url('/illustrate_wave.svg')",
      'footer-texture': "url('')",
    }
  },
  plugins: [require("tailwindcss-animate")],

}
