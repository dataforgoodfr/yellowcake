import React from "react";
import Image from './Image'
import "./Partners.css"


function Partners(props){
    return (
        <div className="partners-container">
        {
            props.data.map(el=>(
                <div className="partners-div">
                    <Image className="partners-img" src={el.src}/>
                </div>
            ))
        }
        </div>
    )
}

export default Partners;