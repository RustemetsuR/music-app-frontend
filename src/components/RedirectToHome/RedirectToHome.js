import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToHome = () => {
    return (
        <div>
            <Redirect to='/music'/>
        </div>
    );
};

export default RedirectToHome;