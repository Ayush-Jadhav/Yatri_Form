import React, { useState, useEffect, useCallback, useRef } from 'react';

// to limit API calls
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

const CityAutoComplete = ({ value, onChange, placeholder }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const componentRef = useRef(null); // Ref to the component's root element


    const GEOAPIFY_API_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY; 

    const fetchSuggestions = async (text) => {
        if (text.length < 3) {
            setSuggestions([]);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&type=city&filter=countrycode:in&format=json&apiKey=${GEOAPIFY_API_KEY}`
            );
            const data = await response.json();
            setSuggestions(data.results || []);
        } catch (error) {
            console.error("Error fetching city suggestions:", error);
            setSuggestions([]);
        }
        setLoading(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedFetch = useCallback(debounce(fetchSuggestions, 300), []);

    useEffect(() => {
        if(value) {
          debouncedFetch(value);
        }
    }, [value, debouncedFetch]);

    // Effect to handle clicks outside the component
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setShowSuggestions(false); // Hide suggestions if click outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handleSelect = (city) => {
        const cityName = city.split(',')[0];
        onChange(cityName);
        setSuggestions([]);
        setShowSuggestions(false); // Hide suggestions after selection
    };

    const handleInputChange = (e) => {
        onChange(e.target.value);
        setShowSuggestions(true);
    }

    return (
        <div className="autocomplete-container" ref={componentRef}>
            <input
                type="text"
                className="form-input"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)} // Show on focus
                autoComplete="off"
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {loading ? (
                        <li>Loading...</li>
                    ) : (
                        suggestions.map((item, index) => (
                            <li key={item.place_id || index} onClick={() => handleSelect(item.formatted)}>
                                {item.formatted}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default CityAutoComplete;

