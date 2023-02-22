import React from 'react';
import NotFoundImage from "../assets/404.jpg"
const NotFound = () => {
    return (
        <div>
            <img  style={{maxHeight:"100vh",width:"100vw"}} src={NotFoundImage} alt="" />
        </div>
    );
}

export default NotFound;
