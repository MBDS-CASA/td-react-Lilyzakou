import React from "react";



function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            style={{
                textAlign: "center",
                bottom: "10px",
                width: "100%",
            }}
        >
            <p>© {year} - Issa Zakou Halima, Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;