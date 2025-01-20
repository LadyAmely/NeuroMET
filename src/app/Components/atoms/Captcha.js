"use client";

import {useEffect, useRef, useState} from "react";
import "../../CSS/recaptcha.css";


export default function Captcha({ onVerify }) {
    const [isVerified, setIsVerified] = useState(false);
    const [token, setToken] = useState("");
    const textareaRef = useRef(null); 

    useEffect(() => {
        const interval = setInterval(() => {
            if (textareaRef.current) {
                const newValue = textareaRef.current.value;
                if (newValue && newValue !== token) {
                    console.log("Token uzyskany:", newValue);
                    setToken(newValue);
                    setIsVerified(true);
                    if (onVerify) onVerify(newValue);
                }
            }
        }, 500);

        return () => clearInterval(interval);
    }, [token, onVerify]);

    return (
        <div style={{marginTop: "15px", textAlign: "center"}} className="recaptcha-container">
            <re-captcha
                        _ngcontent-ng-c1480701471=""
                        formcontrolname="recaptchaReactive"
                        ng-reflect-name="recaptchaReactive"
                        ng-reflect-site-key="6Ldx0mEpAAAAAEYeb1lnfYgHQeUc3F"
                        id="ngrecaptcha-0"
                        className="ng-touched ng-dirty ng-invalid">
                <div style={{width: '304px', height: '78px'}}>
                    <div>
                        <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-q5y5a7ackyfv"
                                frameBorder="0" scrolling="no"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ldx0mEpAAAAAEYeb1lnfYgHQeUc3FitRJ7x1p_G&amp;co=aHR0cHM6Ly9uZXVyb21ldC5hZ2guZWR1LnBsOjQ0Mw..&amp;hl=pl&amp;v=1Bq_oiMBd4XPUhKDwr0YL1Js&amp;size=normal&amp;cb=pz8kid3qqwji">
                        </iframe>
                    </div>
                    <textarea
                        ref={textareaRef}
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{width: '250px',height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0', resize: 'none', display: 'none'}}>
                </textarea>
                </div>
                <iframe style={{display: 'none'}}>
                </iframe>
            </re-captcha>

            {isVerified ? (
                <p style={{ color: "green", marginTop: "10px" }}>Zweryfikowano jako człowiek ✔️</p>
            ) : (
                <p style={{ color: "red", marginTop: "10px" }}>Proszę potwierdzić, że nie jesteś robotem.</p>
            )}
        </div>

    )
        ;
}
