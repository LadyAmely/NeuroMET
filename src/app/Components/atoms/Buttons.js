"use client"

import React from 'react';
function Buttons({ onReset, busy }) {
    return (
        <div className="flex gap-4 justify-center items-center p-5">
            <button
                type="submit"
                disabled={busy}
                className={`
          relative flex items-center justify-center
          bg-gray-900 border border-teal-500 rounded
          px-5 py-2.5 text-base font-medium
          text-teal-300 transition-all duration-200
          hover:bg-teal-500 hover:text-gray-900
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:bg-gray-900 disabled:hover:text-teal-300
          min-w-[120px]
        `}
            >
                {busy ? (
                    <>
                        <span>Proszę czekać...</span>
                    </>
                ) : (
                    'Rejestruj'
                )}
            </button>

            <button
                type="button"
                disabled={busy}
                onClick={onReset}
                className={`
          bg-gray-900 border border-gray-600 rounded
          px-5 py-2.5 text-base font-medium
          text-gray-400 transition-all duration-200
          hover:bg-gray-600 hover:text-teal-300
          disabled:opacity-50 disabled:cursor-not-allowed
          disabled:hover:bg-gray-900 disabled:hover:text-gray-400
          min-w-[120px]
        `}
            >
                Anuluj
            </button>
        </div>
    );
}

export default Buttons;