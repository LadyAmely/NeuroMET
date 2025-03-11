function Contact() {
    return (
        <div className="text-[#333333] py-[50px] px-[50px] w-full mx-[10px] rounded-lg flex justify-center items-center flex-col">
            <h2 className="text-center text-[var(--primary)] text-[26px] mb-[25px] font-bold uppercase tracking-wider">
                Kontakt
            </h2>
            
            <div className="text-center leading-relaxed py-[15px] border-b-2 border-[rgba(126,161,243,0.24)] inline-block w-1/2 justify-center">
                <p className="my-[5px] text-base">dr hab. inż. Krzysztof Regulski, prof. AGH</p>
                <p className="my-[5px] text-base"><strong className="font-bold">tel.: </strong>(0-12) 617 41 31</p>
                <p className="my-[5px] text-base">
                    <strong className="font-bold">email: </strong>
                    <a 
                        href="mailto:regulski@agh.edu.pl" 
                        className="text-[#11dfaf] no-underline font-medium cursor-pointer transition-colors duration-300 hover:text-[#11dfaf] hover:underline hover:decoration-[#11dfaf] hover:decoration-2"
                    >
                        regulski@agh.edu.pl
                    </a>
                </p>
            </div>
            
            <div className="text-center leading-relaxed py-[15px] border-b-2 border-[rgba(126,161,243,0.24)] inline-block w-1/2 justify-center">
                <p className="my-[5px] text-base">dr inż. Łukasz Sztangret</p>
                <p className="my-[5px] text-base"><strong className="font-bold">tel.: </strong>(0-12) 617 41 83</p>
                <p className="my-[5px] text-base">
                    <strong className="font-bold">email: </strong>
                    <a 
                        href="mailto:szt@agh.edu.pl" 
                        className="text-[#11dfaf] no-underline font-medium cursor-pointer transition-colors duration-300 hover:text-[#11dfaf] hover:underline hover:decoration-[#11dfaf] hover:decoration-2"
                    >
                        szt@agh.edu.pl
                    </a>
                </p>
            </div>
            
            <div className="text-center leading-relaxed py-[15px] border-b-2 border-[rgba(126,161,243,0.24)] inline-block w-1/2 justify-center">
                <p className="my-[5px] text-base">
                    Akademia Górniczo-Hutnicza w Krakowie<br />
                    Wydział Inżynierii Metali i Informatyki Przemysłowej<br />
                    Katedra Informatyki Stosowanej i Modelowania
                </p>
            </div>
            
            <div 
                className="flex justify-center items-center w-[300px] h-[150px] mt-[30px] bg-cover bg-no-repeat" 
                style={{ backgroundImage: "url('/agh.png')" }}
            ></div>
        </div>
    );
}

export default Contact;