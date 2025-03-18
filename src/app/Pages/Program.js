import { FileText } from 'lucide-react';

const schedule = [
    {
        time: "9:50",
        title: "ROZPOCZĘCIE",
        presenter: ""
    },
    {
        time: "10:00",
        title: "Pretrenowane sieci neuronowe do prognozowania szeregów czasowych i ich zastosowania przemysłowe",
        presenter: "Jakub Adamczyk (AGH WI)"
    },
    {
        time: "10:20",
        title: "Integracja wiedzy w procesie analizy mikrostruktury stali z wykorzystaniem uczenia maszynowego",
        presenter: "Filip Hallo, Tomasz Jażdżewski (AGH WIMiIP)"
    },
    {
        time: "10:40",
        title: "Algorytmika i analiza konstrukcji urządzenia do śledzenia ruchu gałki ocznej pozwalająca na wdrażanie sterowania aplikacjami",
        presenter: "Szymon Zych (AGH WIMiIP)"
    },
    {
        time: "11:00",
        title: "Integracja funkcjonalności dużych modeli językowych z metodami Explainable Artificial Intelligence (XAI) w obszarze analizy obrazów",
        presenter: "Wojciech Jędrysik, Łukasz Rauch (AGH WIMiIP)"
    },
    {
        time: "11:20",
        title: "Wykorzystanie sztucznych sieci neuronowych do modelowania procesów dynamicznych",
        presenter: "Łukasz Sztangret (AGH WIMiIP), Paweł Maczuga (AGH WI), Danuta Szeliga (AGH WIMiIP), Maciej Paszyński (AGH WI)"
    },
    {
        time: "11:40",
        title: "Wykorzystanie metod bazujących na parach prototypów do poprawy skalowalności systemów uczących się",
        presenter: "Daniel Dąbrowski, Marcin Blachnik (Politechnika Śląska WIM)"
    },
    {
        time: "12:00",
        title: "Projektowanie Grafowych Sieci Neuronowych z wykorzystaniem Kartezjańskiego Programowania Genetycznego: analiza tlenków mono-metalicznych na zbiorze CHILI-3K",
        presenter: "Maciej Krzywda (AGH WFiIS)"
    },
    {
        time: "12:20",
        title: "PRZERWA",
        presenter: ""
    },
    {
        time: "12:40",
        title: "Interface-Engineeering of Layered transition metal chalcogenides nanostructures for thermoelectric applications",
        presenter: "Abinaya Rengarajan (AGH WIMiC)"
    },
    {
        time: "13:00",
        title: "How Reliable Are Optimal Solutions? Post-optimal Analysis of Multi-modal Real-world Problems",
        presenter: "Hubert Guzowski (AGH WI)"
    },
    {
        time: "13:20",
        title: "Kwantowo-ewolucyjna optymalizacja własności mechanicznych dwufazowych płaskich materiałów opartych na silicenie",
        presenter: "Adam Mrozek (AGH WIMiIP), Wacław Kuś (Politechnika Śląska MT)"
    },
    {
        time: "13:40",
        title: "Zastosowanie modeli zastępczych w optymalizacji numerycznej przemysłowych urządzeń elektrotermicznych",
        presenter: "Jakub Wyciślik, Sławomir Golak (Politechnika Śląska WIM)"
    },
    {
        time: "14:00",
        title: "Modelowanie wytopu wlewków aluminiowych o różnej zawartości złomu",
        presenter: "Andrzej Kochański, Hanna Sadłowska (Politechnika Warszawska), Magdalena Kawalec (AGH WO)"
    },
    {
        time: "14:20",
        title: "Nowa generacja modeli dla procesów wytwarzania",
        presenter: "Andrzej Kochański, Hanna Sadłowska (Politechnika Warszawska)"
    },
    {
        time: "14:40",
        title: "ZAKOŃCZENIE",
        presenter: ""
    },
];

function Program() {
    return (
        <div className="m-5 font-sans">
            <h2 className="text-center text-[var(--primary)] text-[26px] mb-[25px] font-bold uppercase tracking-wider">
                Program Konferencji
            </h2>
            
            <div className="flex justify-center my-[20px] mb-[30px]">
                <a 
                    href="/NEUROMET-PROGRAM-2025.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-[var(--primary)] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ease-in shadow-button hover:bg-[var(--primary-light)]"
                >
                    <FileText className="mr-[10px]" size={20} />
                    Pobierz pełny program (PDF)
                </a>
            </div>
            
            <div className="flex flex-col mt-[30px] border border-[#e5e7eb] rounded-lg overflow-hidden">
                {schedule.map((item, index) => {
                    const isSpecialEvent = !item.presenter || 
                        item.title.includes("PRZERWA") || 
                        item.title.includes("ROZPOCZĘCIE") || 
                        item.title.includes("ZAKOŃCZENIE");
                    
                    return (
                        <div 
                            key={index} 
                            className={`flex p-4 border-b border-[#e5e7eb] last:border-b-0 ${
                                isSpecialEvent ? 'bg-[#f3f4f6]' : 'bg-white'
                            }`}
                        >
                            <span className={`font-bold text-base text-[var(--primary)] flex-none w-[80px] mr-4 ${isSpecialEvent ? 'self-center' : 'pt-1'}`}>
                                {item.time}
                            </span>
                            <div className={`flex-1 flex flex-col ${isSpecialEvent ? 'justify-center' : ''}`}>
                                <div className={`text-[1.05rem] leading-[1.4] ${isSpecialEvent ? 'mb-0' : 'mb-[5px]'} ${
                                    isSpecialEvent 
                                        ? 'font-bold text-[var(--primary)]' 
                                        : 'font-semibold text-[#333]'
                                }`}>
                                    {item.title}
                                </div>
                                {item.presenter && (
                                    <div className="text-[0.95rem] text-[#666] italic mt-1 pl-[10px] border-l-[3px] border-[#e5e7eb]">
                                        {item.presenter}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Program;