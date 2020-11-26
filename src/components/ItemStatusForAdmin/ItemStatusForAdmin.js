import React from 'react';
import { useSelector } from 'react-redux';
import './ItemStatusForAdmin.css';

const ItemStatusForAdmin = props => {

    const admin = useSelector(state => state.user.user);

    return (
        <div>
            {admin.role === 'admin' ? props.status === true? 
            <div>
                 <span className='status-text published-text'>Published</span>
                 <button className='delete-button btn' onClick={props.delete}>Delete</button>
            </div>
            : 
            <div>
                <span className='status-text unpublished-text'>Unpublished</span>
                <button className='publish-button btn' onClick={props.publish}>Publish</button>
            </div>
             : null}
        </div>
    );
};

export default ItemStatusForAdmin;