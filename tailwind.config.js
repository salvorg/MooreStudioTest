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
                txtBlack: "#2E2E2E",
                txtLight: "#93A27C",
                txtLightBrown: "#B89776",
            },
            backgroundImage: {
                'bg-icons': "url('../public/bg-icon-200.png')",
            },
        },
    },
    plugins: [],
}