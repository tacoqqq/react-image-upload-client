import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons';

function Buttons(props){
    return(
        <div className='buttons fadein'>
            <div className='button'>
                <label htmlFor='single'>
                    <FontAwesomeIcon icon={faImage} size='10x' color='#3B5998'/>
                </label>
                <input type='file' id='single' onChange={props.onChange}/>
            </div>

            <div className='button'>
                <label htmlFor='multiple'>
                    <FontAwesomeIcon icon={faImages} size='10x' color='#6d84b4'/>
                </label>
                <input type='file' id='multiple' onChange={props.onChange} multiple/>
            </div>
        </div>
    )
}

export default Buttons