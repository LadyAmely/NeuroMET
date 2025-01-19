

export default function Checkbox({ isChecked, onChange }) {
    const handleCheckboxClick = () => {
        const newCheckedState = !isChecked;
        onChange(newCheckedState);
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '20px',
                cursor: 'pointer'
            }}
            onClick={handleCheckboxClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCheckboxClick();
                }
            }}
            role="checkbox"
            aria-checked={isChecked}
            tabIndex={0}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20px",
                    height: "20px",
                    border: `2px solid ${isChecked ? "#4a90e2" : "#ccc"}`,
                    borderRadius: "4px",
                    backgroundColor: isChecked ? "#4a90e2" : "transparent",
                    transition: "background-color 0.3s, border-color 0.3s"
                }}
            >
                {isChecked && (
                    <span
                        style={{
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            lineHeight: "1"
                        }}
                    >
                        ✓
                    </span>
                )}
            </div>

            <label
                style={{
                    fontSize: '16px',
                    color: '#555',
                    marginLeft: '10px'
                }}
            >
                Prezentacja (Opcjonalnie)
            </label>
        </div>
    );
}
