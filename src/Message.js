import React from 'react';

const Message = (props) => (
    <div>
        {/* Display the text with an emoji */}
        <p>
            {props.text} 😊
        </p>
        {/* Add an image */}
        <img
            src="https://emojipedia.org/love-letter?form=MG0AV3"
            alt="Heart Envelope emoji"
            style={{ width: '150px', height: '150px', marginTop: '10px' }}
        />
    </div>
);

export default Message;

