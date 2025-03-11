"use client";
import { useState } from "react";
import Card from "@/app/Components/Layouts/Card";
import { conferenceData } from "./archives_data";
import { ChevronDown } from 'lucide-react';

function Archives() {
    // Default to the most recent year (first in the sorted list)
    const [selectedYear, setSelectedYear] = useState(() => {
        const latestYear = [...new Set(conferenceData.map(conf => conf.year))].sort((a, b) => b - a)[0];
        return latestYear ? latestYear.toString() : "all";
    });

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Sort unique years in descending order (newest first)
    const years = [...new Set(conferenceData.map(conference => conference.year))]
        .sort((a, b) => b - a);

    const filteredConferences = selectedYear === "all"
        ? conferenceData
        : conferenceData.filter(conference => conference.year === parseInt(selectedYear));

    return (
        <div className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b">
            <div className="max-w-7xl mx-auto">
                {/* Header section */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-[#2d3748] mb-4 transition-colors duration-300 hover:text-[#00ffcc]">
                        Archiwum Konferencji
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Przeglądaj historię wszystkich edycji seminarium NeuroMet od 1997 roku do dziś.
                        Wybierz rok, aby zobaczyć szczegóły danej edycji.
                    </p>
                </div>

                {/* Year selection with timeline */}
                <div className="mb-4">
                    <div className="relative max-w-4xl mx-auto">
                        {/* Year selector dropdown (mobile) */}
                        <div className="relative z-10 md:hidden">
                            <div className="flex justify-center mb-3">
                                <div className="relative w-full max-w-xs">
                                    <select 
                                        id="yearSelect" 
                                        value={selectedYear} 
                                        onChange={handleYearChange}
                                        className="w-full py-3 px-4 appearance-none bg-white border-2 border-gray-300 rounded-lg 
                                            text-gray-700 font-medium shadow-sm focus:outline-none focus:ring-2 
                                            focus:ring-[#00ffcc] focus:border-transparent transition-all duration-300
                                            hover:border-[#00ffcc] cursor-pointer pr-10"
                                    >
                                        <option value="all">Wszystkie lata</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Desktop year pills with timeline */}
                        <div className="hidden md:block">
                            {/* First row of years */}
                            <div className="flex justify-between gap-x-1 relative mb-2">
                                {/* Timeline line */}
                                <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2"></div>
                                
                                {/* First 9 years */}
                                {years.slice(0, 9).map(year => (
                                    <button 
                                        key={year}
                                        className={`relative min-w-[60px] px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 border
                                            ${selectedYear === year.toString() 
                                                ? "bg-[#00ffcc] text-gray-800 border-transparent" 
                                                : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"}`}
                                        onClick={() => setSelectedYear(year.toString())}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Second row of years */}
                            <div className="flex justify-between gap-x-1 relative mb-2">
                                {/* Timeline line */}
                                <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2"></div>
                                
                                {/* Middle 9 years */}
                                {years.slice(9, 18).map(year => (
                                    <button 
                                        key={year}
                                        className={`relative min-w-[60px] px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 border
                                            ${selectedYear === year.toString() 
                                                ? "bg-[#00ffcc] text-gray-800 border-transparent" 
                                                : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"}`}
                                        onClick={() => setSelectedYear(year.toString())}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Third row of years */}
                            <div className="flex justify-between gap-x-1 relative">
                                {/* Timeline line */}
                                <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2"></div>
                                
                                {/* Remaining years */}
                                {years.slice(18).map(year => (
                                    <button 
                                        key={year}
                                        className={`relative min-w-[60px] px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 border
                                            ${selectedYear === year.toString() 
                                                ? "bg-[#00ffcc] text-gray-800 border-transparent" 
                                                : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"}`}
                                        onClick={() => setSelectedYear(year.toString())}
                                    >
                                        {year}
                                    </button>
                                ))}
                                
                                {/* Add empty buttons to ensure even spacing */}
                                {Array(9 - years.slice(18).length).fill(0).map((_, i) => (
                                    <div key={i} className="invisible min-w-[60px] px-4 py-1.5"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conference cards - reduced spacing */}
                <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-1">
                    {filteredConferences.length === 0 ? (
                        <div className="text-center">
                            <p className="text-gray-600">Brak wyników dla wybranych kryteriów</p>
                        </div>
                    ) : (
                        filteredConferences
                            .sort((a, b) => b.year - a.year)
                            .map((conference, index) => (
                                <Card
                                    key={conference.id || index}
                                    title={conference.title}
                                    description={conference.description}
                                    date={conference.data}
                                    presentations={conference.presentations}
                                    year={conference.year}
                                />
                            ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Archives;