import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setTripType, 
    setOutstationField 
} from '../redux/slices/outstationSlice';
import CityAutocomplete from './CityAutoComplete';

const OutstationForm = () => {
    const dispatch = useDispatch();
    const outstationData = useSelector((state) => state.outstation);
    const { tripType, from, to, pickupDate, returnDate, pickupTime } = outstationData;

    const handleFieldChange = (field, value) => {
        dispatch(setOutstationField({ field, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Outstation Form Data:", outstationData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="trip-type-selector">
                <label>
                    <input type="radio" name="tripType" value="oneWay" checked={tripType === 'oneWay'} onChange={(e) => dispatch(setTripType(e.target.value))} /> One Way
                </label>
                <label>
                    <input type="radio" name="tripType" value="roundTrip" checked={tripType === 'roundTrip'} onChange={(e) => dispatch(setTripType(e.target.value))} /> Round Trip
                </label>
            </div>

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
                
                {tripType === 'roundTrip' && (
                    <div className="input-group">
                        <label>Return Date</label>
                        <input type="text" className="form-input" placeholder="Select Date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={returnDate} onChange={(e) => handleFieldChange('returnDate', e.target.value)} />
                        <i className="fas fa-calendar-alt input-icon"></i>
                    </div>
                )}
            </div>


            <button type="submit" className="explore-cabs-btn">
                EXPLORE CABS
            </button>
        </form>
    );
};

export default OutstationForm;

