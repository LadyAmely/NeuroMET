"use client";

function Buttons({ onReset }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <button
                type="submit"
                style={{
                    backgroundColor: "#1b2433",
                    border: "1px solid #00bfa5",
                    borderRadius: "5px",
                    color: "#00ffcc",
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#00bfa5";
                    e.target.style.color = "#1b2433";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#1b2433";
                    e.target.style.color = "#00ffcc";
                }}
            >
                Rejestruj
            </button>
            <button
                type="button"
                style={{
                    backgroundColor: "#1b2433",
                    border: "1px solid #444c5c",
                    borderRadius: "5px",
                    color: "#888d98",
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition:
                        "background-color 0.2s ease, transform 0.2s ease, color 0.2s ease",
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#444c5c";
                    e.target.style.color = "#00ffcc";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#1b2433";
                    e.target.style.color = "#888d98";
                }}
                onClick={onReset}
            >
                Anuluj
            </button>
        </div>
    );
}

export default Buttons;
