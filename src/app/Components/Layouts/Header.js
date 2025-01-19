"use client";
import "../../CSS/header.css";

function Header(){
    return (
        <header className="hero-header">
            <div className="container">
                <h1 className="hero-title">Seminarium na temat:</h1>
                <h2 className="hero-subtitle">"ZASTOSOWANIE SZTUCZNEJ INTELIGENCJI W SYMULACJI I STEROWANIU PROCESAMI
                    METALURGICZNYMI"</h2>
                <p className="hero-description">
                    Odbędzie się we WTOREK - 15.04 2025 w Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie.<br/>
                </p>
                <p className="hero-description">Tegoroczne Seminarium NeuroMet będzie dwudziestym siódmym z serii spotkań, których celem jest stworzenie platformy do wymiany doświadczeń w zakresie zastosowania sztucznej inteligencji do symulacji i sterowania procesami metalurgicznymi.</p>
                <p className="hero-description">Zachęcamy do zgłoszeń w tematyce uczenia maszynowego, Industry 4.0, analizy danych i optymalizacji. Zapraszamy do prezentacji wyników badań, wyników prac badawczych i wdrożeniowych oraz tematyk badawczych doktoratów. Udział w seminarium jest bezpłatny.</p>
                <p className="hero-description">Zapraszamy!</p>

                <div className="organizer-info">
                    <h2>ORGANIZATOR SEMINARIUM</h2>
                    <p>Katedra Informatyki Stosowanej i Modelowania
                        Przewodniczący Komitetu Organizacyjnego
                        dr hab. inż. Krzysztof Regulski, prof. AGH</p>
                    <div className="image-container"/>
                </div>

                <div className="right-image-container"/>


            </div>

        </header>
    );

}

export default Header;