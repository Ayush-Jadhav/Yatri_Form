import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAirportField } from '../redux/slices/airportSlice';
import CityAutocomplete from './CityAutoComplete';

const AirportForm = () => {
    const dispatch = useDispatch();
    const airportData = useSelector((state) => state.airport);
    const { from, to, pickupDate, pickupTime } = airportData;

    const handleFieldChange = (field, value) => {
        dispatch(setAirportField({ field, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Airport Form Data:", airportData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-grid">

               <div className="input-group">
                    <label>FROM</label>
                    <CityAutocomplete value={from} onChange={(value) => handleFieldChange('from', value)} placeholder="Input Text" />
                </div>
                
                <div className="input-group">
                    <label>TO</label>
                    <CityAutocomplete value={to} onChange={(value) => handleFieldChange('to', value)} placeholder="Input Text" />
                </div>

                <div className="input-group">
                    <label>Pickup Date</label>
                    <input type="text" className="form-input" placeholder="Select Date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={pickupDate} onChange={(e) => handleFieldChange('pickupDate', e.target.value)} />
                    <i className="fas fa-calendar-alt input-icon"></i>
                </div>
                
                <div className="input-group">
                    <label>Pickup Time</label>
                    <input type="text" className="form-input" placeholder="00:00" onFocus={(e) => e.target.type = 'time'} onBlur={(e) => e.target.type = 'text'} value={pickupTime} onChange={(e) => handleFieldChange('pickupTime', e.target.value)} />
                    <i className="fas fa-clock input-icon"></i>
                </div>
            </div>

            <button type="submit" className="explore-cabs-btn">
                EXPLORE CABS
            </button>
        </form>
    );
};

export default AirportForm;

