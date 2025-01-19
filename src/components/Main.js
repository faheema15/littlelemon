import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const seedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        };
    };

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const updateTimes = (state, action) => {
        return { availableTimes: fetchAPI(action.date) }; // You can dispatch actions later if needed
    };

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state] = useReducer(updateTimes, initialState); // Removed dispatch since it's not being used

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {}; // collect form data here
        submitForm(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Form fields go here */}
                <button type="submit">Submit</button>
            </form>
            {/* Render available times */}
            <div>
                <h3>Available Times</h3>
                <ul>
                    {state.availableTimes.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
