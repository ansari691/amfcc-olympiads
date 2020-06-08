import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="row justify-content-end">
            <Link to="/school/login">
            <button className="btn btn-primary mr-3">school login</button>
            </Link>
            <Link to="/student/login">
            <button className="btn btn-primary">student login</button>
            </Link>
            
        </div>
    )
}

export default Home;
