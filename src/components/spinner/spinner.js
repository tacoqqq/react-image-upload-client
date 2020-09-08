import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Spinner(props){
    return (
        <div className="spinner fadein">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="5x"/>
        </div>
    )
}

export default Spinner;
