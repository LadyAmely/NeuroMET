"use client";

function Footer() {
    return (
        <footer className="bg-[var(--navbar-bg)] text-white py-5 px-5 flex flex-col justify-center items-center min-h-[100px] border-t-2 border-[var(--navbar-accent)]">
            <a 
                href="https://www.isim.agh.edu.pl/" 
                className="text-[var(--navbar-accent)] no-underline text-xl font-medium transition-colors duration-300 hover:text-[var(--navbar-accent-hover)] hover:underline hover:decoration-[var(--navbar-accent)] hover:decoration-2"
            >
                www.isim.agh.edu.pl
            </a>
            <div className="pt-[15px] text-[#7c7c7c] text-[0.8rem]">
                <p> ©2025 Amelia Nawrot, Krzysztof Bzowski</p>
            </div>
        </footer>
    );
}

export default Footer;