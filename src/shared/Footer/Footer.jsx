import React from 'react';
// import footerLogo from "../../assets/img/makeup.jpg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-300 text-base-content mt-20">
            <aside>
                <img className='w-16 h-16 rounded-full' src="https://i.ibb.co/vB3nMxp/footer.jpg" alt="footer" />
                <p className='text-black text-lg'>Wedding Bliss Bangladesh<br />It is a event management company.</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;