import { useEffect, useRef, useState } from 'react';
import '../App.css'

const InputField = ({label,value,onChange,isPrice = false,isCombo = false ,options = []}) => {

    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleChange = (e) => {
        let val = e.target.value;

        if (isPrice) {
            val = val.replace(/,/g, '');
            if (!/^\d*$/.test(val)) return;
            if (val) {
                val = parseInt(val).toLocaleString('en-US');
            }
        }

        onChange(val);
    };


    const handleSelect = (option) => {
        onChange(`${option} %`);
        setIsOpen(false);
    };

    const toggleList = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
        setIsOpen(false);
        }
    };

    return (
        <div className="field" ref={containerRef}>
            <label>{label}</label>

            {isCombo ? (
                <div className="combo-wrap">
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        inputMode="numeric"
                    />
                    <button 
                        type="button" 
                        className="combo-toggle"
                        onClick={toggleList}
                    >
                    ▼ %
                    </button>

                    {isOpen && (
                        <ul className="combo-list">
                            {options.map((option) => (
                                <li
                                    key={option}
                                    className={`combo-item ${value === `${option} %` ? 'selected' : ''}`}
                                    onClick={() => handleSelect(option)}
                                    >
                                    {option} %
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    inputMode="numeric"
                />
            )}
        </div>
    );
}

export default InputField;
