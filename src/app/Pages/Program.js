import "../CSS/program.css";
import { FileText } from 'lucide-react';

const schedule = [
    {
        time: "10:00", 
        title: "ROZPOCZĘCIE", 
        presenter: ""
    },
    {
        time: "10:10", 
        title: "Pretrenowane sieci neuronowe do prognozowania szeregów czasowych i ich zastosowania przemysłowe", 
        presenter: "Jakub Adamczyk - AGH WI"
    },
    {
        time: "10:30", 
        title: "Integracja wiedzy w procesie analizie mikrostruktury stali z wykorzystaniem uczenia maszynowego", 
        presenter: "Filip Hallo - AGH WIMiIP"
    },
    {
        time: "10:50", 
        title: "Algorytmika i analiza konstrukcji urządzenia do śledzenia ruchu gałki ocznej pozwalająca na wdrażanie sterowania aplikacjami", 
        presenter: "Szymon Zych - AGH WIMiIP"
    },
    {
        time: "11:10", 
        title: "Integracja funkcjonalności dużych modeli językowych z metodami Explainable Artificial Intelligence (XAI) w obszarze analizy obrazów", 
        presenter: "Wojciech Jędrysik, Łukasz Rauch - AGH WIMiIP"
    },
    {
        time: "11:30", 
        title: "Projektowanie Grafowych Sieci Neuronowych z wykorzystaniem Kartezjańskiego Programowania Genetycznego: analiza tlenków mono-metalicznych na zbiorze CHILI-3K", 
        presenter: "Maciej Krzywda - AGH WFiIS"
    },
    {
        time: "11:50", 
        title: "PRZERWA", 
        presenter: ""
    },
    {
        time: "12:20", 
        title: "Interface-Engineeering of Layered transition metal chalcogenides nanostructures for thermoelectric applications", 
        presenter: "Abinaya Rengarajan - AGH WIMiC"
    },
    {
        time: "12:40", 
        title: "How Reliable Are Optimal Solutions? Post-optimal Analysis of Multi-modal Real-world Problems", 
        presenter: "Hubert Guzowski - AGH WI"
    },
    {
        time: "13:00", 
        title: "Kwantowo-ewolucyjna optymalizacja własności mechanicznych dwufazowych płaskich materiałów opartych na silicenie", 
        presenter: "Adam Mrozek, Wacław Kuś - AGH WIMiIP, Politechnika Śląska"
    },
    {
        time: "13:20", 
        title: "Zastosowanie modeli zastępczych w optymalizacji numerycznej przemysłowych urządzeń elektrotermicznych", 
        presenter: "Jakub Wyciślik, Sławomir Golak - Politechnika Śląska"
    },
    {
        time: "13:40", 
        title: "Modelowanie wytopu wlewków aluminiowych o różnej zawartości złomu", 
        presenter: "Andrzej Kochański, Hanna Sadłowska, Magdalena Kawalec - Politechnika Warszawska, AGH WO"
    },
    {
        time: "14:00", 
        title: "Nowa generacja modeli dla procesów wytwarzania", 
        presenter: "Andrzej Kochański - Politechnika Warszawska"
    },
    {
        time: "14:20", 
        title: "ZAKOŃCZENIE", 
        presenter: ""
    },
];


function Program() {
    return (
        <div className="program-container">
            <h2>Program Konferencji</h2>
            
            <div className="program-pdf-link">
                <a href="/NEUROMET-PROGRAM-2025.pdf" target="_blank" rel="noopener noreferrer" className="program-pdf-button">
                    <FileText size={20} />
                    Pobierz pełny program (PDF)
                </a>
            </div>
            
            <div className="program-schedule">
                {schedule.map((item, index) => {
                    const isSpecialEvent = !item.presenter || 
                        item.title.includes("PRZERWA") || 
                        item.title.includes("ROZPOCZĘCIE") || 
                        item.title.includes("ZAKOŃCZENIE");
                    
                    return (
                        <div key={index} className={`program-item ${isSpecialEvent ? 'special-event' : ''}`}>
                            <span className="program-time">{item.time}</span>
                            <div className="program-content">
                                <div className="program-title">{item.title}</div>
                                {item.presenter && <div className="program-presenter">{item.presenter}</div>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Program;