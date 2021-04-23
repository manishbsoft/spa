import React, { useState } from 'react';

const TextBox = (props) => {

    const [inputValue, setInputValue] = useState();
    const [valudateMessage, setValudateMessage] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value === "") {
            setValudateMessage(true)
        }
        setInputValue(e.target.value);
    }

    const {name, value, required} = props;
    
    return (
        <input
          type="text"
          name={name}
          value={value}
          required={}
          onChange={(e) => handleChange(e)}
        />
    )
}

export default TextBox;