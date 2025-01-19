"use client";
import "../../CSS/card.css";
import {useState} from "react";

function Card({ title, description, date, presentations }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="card" onClick={toggleExpand}>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <small className="card-date">{date}</small>
            {isExpanded && (
                <div>

                    <ul>
                        {Array.isArray(presentations) &&
                            presentations.map((presentation, index) => (
                                <div key={presentation.id || index} className="card-content">
                                    <li>
                                        <h3>{presentation.title}</h3>
                                        <p>{presentation.description}</p>
                                    </li>
                                </div>
                            ))}
                    </ul>

                </div>

            )}
        </div>
    );
}

export default Card;


