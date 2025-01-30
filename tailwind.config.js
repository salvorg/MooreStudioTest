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
            },
            colors: {
                txtNavbar: "#2F2F2F",
                txtTitle: "#2E2E2E",
                txtOlive: "#93A27C",
                txtLightBrown: "#B89776",
            },
            backgroundImage: {
                'hero-bg': "url('../public/hero-section-bg.jpg')",
            },
        },
    },
    plugins: [],
}