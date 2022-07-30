import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
        <p> NOT FOUND </p>
        <Link to="/" className=""> GO HOME</Link>
    </div>
);

export default NotFound;