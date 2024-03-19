import React, { useState } from 'react';
import './ListBox.css';

const ListBox = () => {
    const [textboxes, setTextboxes] = useState([]);
    const [sum, setSum] = useState(0);
    const [warning, setWarning] = useState('');
  
    const updateTextboxes = (newTextboxes) => {
        setTextboxes(newTextboxes);
        calculateSum(newTextboxes);
    };
  
    const calculateSum = (values) => {
        let total = 0;
        let hasNonInteger = false;
        values.forEach((value) => {
            const intValue = parseInt(value);
            if (!isNaN(intValue)) {
                total += intValue;
            } else if (value !== ''){
                hasNonInteger = true;
            }
        });
        setWarning(hasNonInteger ? 'Please enter only integer values!' : '');
        setSum(total);
    };
  
    return (
        <div className="container">
            <h1>Dynamic Textbox Demo</h1>
            <button onClick={() => updateTextboxes([...textboxes, ''])} className="add-button">Add Textbox</button>
            <div className="textbox-container">
                {textboxes.map((value, index) => (
                    <div key={index} className="textbox-wrapper">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => updateTextboxes(textboxes.map((item, idx) => idx === index ? e.target.value : item))}
                            className="textbox"
                        />
                        <button onClick={() => updateTextboxes(textboxes.filter((item, idx) => idx !== index))} className="delete-button">Delete</button>
                    </div>
                ))}
            </div>
            {warning && <p className="warning">{warning}</p>}
            <p>Sum: {sum}</p>
        </div>
    );
}

export default ListBox;