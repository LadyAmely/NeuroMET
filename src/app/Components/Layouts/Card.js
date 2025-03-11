"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, MapPin, Users } from 'lucide-react';

function Card({ title, description, date, presentations, year }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    // Extract location from description (assuming consistent format)
    const location = description?.includes("Lokalizacja:") 
        ? description.split("Lokalizacja:")[1].trim() 
        : description;
    
    // Extract date from date string
    const dateText = date?.includes("Data:") 
        ? date.split("Data:")[1].trim() 
        : date;

    return (
        <div className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            {/* Card header with year badge */}
            <div className="relative px-5 pt-4 pb-3 border-b border-gray-100">
                <div className="absolute top-3 right-5 bg-[#00ffcc] text-gray-800 py-1 px-3 rounded-full text-xs font-bold">
                    {year}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 pr-16">{title}</h3>
                
                <div className="flex flex-col space-y-1 text-gray-600 text-sm">
                    {dateText && (
                        <div className="flex items-center">
                            <Calendar size={14} className="mr-2 text-gray-400" />
                            <span>{dateText}</span>
                        </div>
                    )}
                    {location && (
                        <div className="flex items-center">
                            <MapPin size={14} className="mr-2 text-gray-400" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Card body */}
            <div className="px-5 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2" />
                        <span className="text-xs font-medium">
                            {presentations?.length || 0} {presentations?.length === 1 ? 'prezentacja' : 'prezentacji'}
                        </span>
                    </div>
                    
                    <button 
                        onClick={toggleExpand}
                        className="text-gray-600 hover:text-[#00ffcc] focus:outline-none transition-colors duration-300 flex items-center gap-1 text-xs font-medium"
                    >
                        {isExpanded ? 'Zwiń' : 'Rozwiń prezentacje'}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
                
                {/* Expandable presentations */}
                {isExpanded && presentations && presentations.length > 0 && (
                    <div className="mt-4 space-y-3 animate-[fadeIn_0.4s_ease-in-out]">
                        {presentations.map((presentation, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-medium text-gray-800 whitespace-pre-line text-sm">{presentation.title}</h4>
                                    {presentation.description && (
                                        <p className="text-gray-600 text-xs">{presentation.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;