import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class Images extends Component{
    render(){
        let images = this.props.images.map((image,i) => 
            <div key={i} className='fadein image'>
                <div className='delete' onClick={() => this.props.removeImage(image.public_id)}>
                    <FontAwesomeIcon icon={faTimesCircle} size='2x'/>
                </div>
                <img src={image.secure_url} alt='' />
            </div>    
        )
        return(
            <div className='images'>
                {images}
            </div>
        )
    }
}

export default Images;