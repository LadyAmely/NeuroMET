"use client";
import Checkbox from "@/app/Components/protons/Checkbox";
import { useState } from "react";
import Buttons from "@/app/Components/atoms/Buttons";
import "../CSS/form.css";
import {Notification} from "@/app/Components/atoms/Notification";

function Registration() {
    const [confirmation, setConfirmation] = useState(false);
    const [isBusy, setIsBusy] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        academicDegree: "",
        email: "",
        affiliation: "",
        presentation: "",
    });

    const [isInputEnabled, setIsInputEnabled] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (isChecked) => {
        setIsCheckboxChecked(isChecked);
        setIsInputEnabled(isChecked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsBusy(true)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            data: formData,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        try {
            const response = await fetch("https://neuromet.wimiip.eu/api/participants", requestOptions);
            if (response.ok) {
                const result = await response.json();
                console.log("Sukces:", result);

                setFormData({
                    firstName: "",
                    lastName: "",
                    academicDegree: "",
                    email: "",
                    affiliation: "",
                    presentation: "",
                });
                setConfirmation(true);
            } else {
                console.error("Błąd:", response.statusText);
            }
        } catch (error) {
            console.error("Błąd:", error);
        } finally {
            setIsBusy(false);
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            academicDegree: "",
            email: "",
            affiliation: "",
            presentation: "",
        });
        setIsInputEnabled(false);
        setIsCheckboxChecked(false);
    };
    return (
        <div
            style={{
                background: "radial-gradient(circle, #f7f7f7, #e2e6ea)",
                padding: "20px",
            }}
        >
            <div className="registration-container">
                <h2>Rejestracja</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom: "20px", position: "relative"}}>
                        <label htmlFor="firstName">Imię:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Podaj swoje imię"
                            required
                        />
                    </div>
                    <div style={{marginBottom: "20px", position: "relative"}}>
                        <label htmlFor="lastName">Nazwisko:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Podaj swoje nazwisko"
                            required
                        />
                    </div>
                    <div style={{marginBottom: "20px", position: "relative"}}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Podaj nazwę e-mail"
                            required
                        />
                    </div>
                    <div style={{marginBottom: "20px", position: "relative"}}>
                        <label htmlFor="academicDegree">Stopień naukowy:</label>
                        <select
                            id="academicDegree"
                            name="academicDegree"
                            value={formData.academicDegree}
                            onChange={handleChange}
                            className="styled-select"
                        >
                            <option value="" disabled>-- Wybierz stopień naukowy --</option>
                            <option value="Mgr">Magister</option>
                            <option value="MgrInz">Magister Inżynier</option>
                            <option value="Dr">Doktor</option>
                            <option value="DrInz">Doktor Inżynier</option>
                            <option value="DrHab">Doktor Habilitowany</option>
                            <option value="DrHabInz">Doktor Habilitowany Inżynier</option>
                            <option value="ProfDrHabInz">Profesor Doktor Habilitowany Inżynier</option>
                        </select>
                    </div>
                    <div style={{marginBottom: "20px", position: "relative"}}>
                        <label htmlFor="affiliation">Uczelnia:</label>
                        <input
                            type="text"
                            id="affiliation"
                            name="affiliation"
                            value={formData.affiliation}
                            onChange={handleChange}
                            placeholder="Podaj nazwę uczelni"
                        />
                    </div>
                    <Checkbox
                        isChecked={isCheckboxChecked}
                        onChange={handleCheckboxChange}
                    />

                    <div style={{marginBottom: "20px", marginTop: "30px", position: "relative"}}>
                        <label htmlFor="presentation">Nazwa Prezentacji:</label>
                        <input
                            type="text"
                            id="presentation"
                            name="presentation"
                            value={formData.presentation}
                            onChange={handleChange}
                            placeholder="Podaj nazwę prezentacji"
                            disabled={!isInputEnabled}
                            style={{
                                backgroundColor: isInputEnabled ? "rgba(255,255,255,0.76)" : "rgba(240,240,240,0.77)",
                                color: isInputEnabled ? "#000000" : "#888888",
                                cursor: isInputEnabled ? "text" : "not-allowed",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                            }}
                        />
                    </div>

                    {confirmation && <Notification>Dziękujemy za rejestracje</Notification>}
                    <Buttons onReset={handleReset} busy={isBusy}/>
                </form>
            </div>
        </div>
    );
}

export default Registration;
