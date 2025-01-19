"use client";
import "../CSS/contact.css";

function Contact(){

    return (

        <div className="contact-section">
            <h2>Kontakt</h2>
            <div className="contact-info">
                <p>dr hab. inż. Krzysztof Regulski, prof. AGH</p>
                <p><strong>tel.: </strong>(0-12) 617 41 31</p>
                <p><strong>email: </strong><a href="mailto:regulski@agh.edu.pl">regulski@agh.edu.pl</a></p>

            </div>
            <div className="contact-info">
                <p>dr inż. Łukasz Sztangret</p>
                <p><strong>tel.: </strong>(0-12) 617 41 83</p>
                <p><strong>email: </strong><a href="mailto:szt@agh.edu.pl">szt@agh.edu.pl</a></p>
            </div>
            <div className="contact-info">
                <p>Akademia Górniczo-Hutnicza w Krakowie<br/>
                    Wydział Inżynierii Metali i Informatyki Przemysłowej<br/>
                    Katedra Informatyki Stosowanej i Modelowania</p>
            </div>
            <div className="contact-image-container">

            </div>


        </div>

    );


}

export default Contact;