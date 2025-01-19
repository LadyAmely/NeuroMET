"use client";

import { useState } from "react";
import "../../CSS/recaptcha.css";

export default function Captcha({ onVerify }) {
    const [isHuman, setIsHuman] = useState(false);

    const handleCaptcha = (value) => {
        setIsHuman(!!value);
        onVerify(!!value);
    };

    return (
        <div style={{marginTop: "15px", textAlign: "center"}} className="recaptcha-container">
            <re-captcha _ngcontent-ng-c1480701471="" formcontrolname="recaptchaReactive"
                        ng-reflect-name="recaptchaReactive" ng-reflect-site-key="6Ldx0mEpAAAAAEYeb1lnfYgHQeUc3F"
                        id="ngrecaptcha-0" className="ng-untouched ng-pristine ng-invalid">
                <div className="size-captcha">
                    <div>
                        <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-55lyeupml4se"
                                frameBorder="0" scrolling="no"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ldx0mEpAAAAAEYeb1lnfYgHQeUc3FitRJ7x1p_G&amp;co=aHR0cHM6Ly9uZXVyb21ldC5hZ2guZWR1LnBsOjQ0Mw..&amp;hl=pl&amp;v=zIriijn3uj5Vpknvt_LnfNbF&amp;size=normal&amp;cb=ah17pvxcyqrf"></iframe>
                    </div>
                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" className="recaptcha-style"></textarea>
                    <iframe style={{display: 'none'}}></iframe>

                </div>
            </re-captcha>

        </div>

    )
        ;
}
