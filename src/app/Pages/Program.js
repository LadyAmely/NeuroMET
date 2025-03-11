import "../CSS/program.css";

const schedule = [
    {time: "10:00", event: "Rozpoczęcie"},
    {time: "10:20 - 12:00", event: "Sesja I"},
    {time: "12:00", event: " PRZERWA KAWOWA "},
    {time: "12:30", event: "Sesja II"},
    {time: "około 15:00", event: "Lunch"},
];


function Program() {
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

