"use client";
import "../CSS/program.css";

    function Program() {

        const schedule = [
            { time: "10:00", event: "Rozpoczęcie" },
            { time: "10:20", event: "Wykorzystanie metod uczenia maszynowego w analizie obrazów zmian \n" +
                    "nowotworowych jelita grubego, Łukasz Marcjan, Akademia Górniczo-Hutnicza" },
            { time: "10:40", event: "Explainable Artificial Intelligence - analiza metod, narzędzi i możliwości \n" +
                    "aplikacji przemysłowych, Wojciech Jędrysik, Piotr Hajder, Łukasz Rauch, \n" +
                    "Akademia Górniczo-Hutnicza " },
            { time: "11:00", event: " Ekstrakcja cech mikrostruktury na bazie zdjęć z wykorzystaniem algorytmów \n" +
                    "analizy obrazu, Tomasz Jażdżewski, Akademia Górniczo-Hutnicza  " },
            { time: "11:20", event: "Przewidywanie kategorii z impedancyjnych profili magnetycznych pojazdów,  \n" +
                    "Filip Hallo, Akademia Górniczo-Hutnicza " },
            { time: "11:40", event: " Opracowanie innowacyjnych rozwiązań w zakresie automatyzacji załadunku \n"+
                    "wagonów i badań koksu z wykorzystaniem zaawansowanych baz danych i \n" +
                    "systemów informatycznych,  \n" +
                    "Marek Lepich, ArcelorMittal Poland S.A. Oddział w Zdzieszowicach" },
            { time: "12:00", event: "  PRZERWA KAWOWA "},
            { time: "12:30", event: " Domain-expert Application Handling Lack of data with Imputation Algorithms \n" +
                    "(DAHLIA), Andrzej Kochański, Anna Kozak, Hanna Sadłowska, Przemysław \n" +
                    "Grzegorzewski, Politechnika Warszawska "},
            {time: "12:50", event: "Szczególne warunki imputacji danych - analiza przypadku,  \n" +
                    "Szymon Pluta, Hanna Sadłowska, Andrzej Kochański, Politechnika Warszawska "},
            {time: "13:10", event: "Wykorzystanie wzorców behawioralnych jako danych do modelowania w \n" +
                    "prewencyjnej kontroli procesu, Jacek Kozłowski, Politechnika Warszawska "},
            {time: "13:30", event: " Analiza własności materiałów kompozytowych wzmacnianych włóknami \n" +
                    "nieciągłymi z zastosowaniem modelu opartego na danych,  \n" +
                    "Witold Ogierman, Politechnika Śląska "},
            {time: "13:50", event: "Zastosowanie sieci neuronowych do modelu adaptacyjnego sterującego \n" +
                    "odsiarczaniem surówki żelaza,  \n" +
                    "Angelika Podolska-Loska, AGH Akademia Górniczo-Hutnicza "},
            {time: "14:10", event: " Inteligentny, adaptacyjny system kontroli jakości i wspomagania \n" +
                    "optymalizacji produkcji systemów montażu precyzyjnego oparty o sztuczną \n" +
                    "inteligencję, Łukasz Sztangret, Tomasz Dębiński, Marcin Hojny, Danuta Szeliga, \n" +
                    "Akademia Górniczo-Hutnicza "}



        ];

        return (
            <div className="program-container">
                <h2>Program Konferencji</h2>
                <div className="program-schedule">
                    {schedule.map((item, index) => (
                        <div key={index} className="program-item">
                            <span className="program-time">{item.time}</span>
                            <span className="program-event">{item.event}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default Program;

