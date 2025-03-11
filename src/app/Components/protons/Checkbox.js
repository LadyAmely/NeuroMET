import React from 'react';
import {Check} from 'lucide-react';

const Checkbox = ({
                      isChecked,
                      onChange,
                      label = "Prezentacja (Opcjonalnie)",
                      id = "presentation-checkbox"
                  }) => {
    const handleChange = (event) => {
        // If triggered by keyboard or direct click on input
        if (event.type === 'change') {
            onChange(!isChecked);
            return;
        }

        // If triggered by click on wrapper div
        if (event.type === 'click' && event.target !== event.currentTarget) {
            return; // Ignore if click was on the input itself
        }

        onChange(!isChecked);
    };

    return (
        <div className="mt-5">
            <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input
                        type="checkbox"
                        id={id}
                        checked={isChecked}
                        onChange={handleChange}
                        className={`
              h-5 w-5 rounded
              mt-1.5
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              cursor-pointer text-blue-500 
              ${isChecked
                            ? 'bg-blue-500'
                            : 'bg-white'
                        }
            `}
                    />

                </div>
                <label
                    htmlFor={id}
                    className={`
            ml-3 text-base select-none
            text-gray-600 cursor-pointer
          `}
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Checkbox;