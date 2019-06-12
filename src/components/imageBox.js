import React from 'react';

function ImageBox (props) {

    const imageStyle = {
        width: '100%',
        height: 'auto',
        marginBottom: '5%',
    }

    return (
        <div className="col-3">
            <img alt="Mosnter Hunter" src={props.image} id={props.id}
            onClick={() => props.randomizeImage(props.id)}
            style={imageStyle}/>
        </div> 
    )

}

export default ImageBox;