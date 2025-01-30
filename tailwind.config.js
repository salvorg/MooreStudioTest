module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                container: "1280px",
            },
            fontFamily: {
                montserrat: ['Montserrat Alternates', 'sans-serif'],
            },
            fontSize: {
                '18': '18px',
                '32': '32px',
                '52': '52px',
                '56': '56px',
            },
            colors: {
                txtNavbar: "#2F2F2F",
                txtTitle: "#2E2E2E",
                txtOlive: "#93A27C",
                txtLightBrown: "#B89776",
                txtGrey: "#797979",
                grey: "#ECECEC",
                lightGrey: "#EEEEEE",
                cream: "#FAF5F1",
                cream2: "#F4F4F4",
                coffee: "#493829",
                sand: "#B89776",
            },
            backgroundImage: {
                'hero-bg': "url('../public/hero-section-bg.jpg')",
                'about-bg': "url('../public/about-bg.jpeg')",
            },
        },
    },
    plugins: [],
}