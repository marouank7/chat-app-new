import React from 'react';
import './contact.css';
//import { checkPropTypes } from 'prop-types';

const Contact = (props) => {
    return(
        <article className="Contact">
            <aside>
                 <img className="avatar" src={props.avatar}></img>  
            </aside>
            <main>
                <div className="name">
                    {props.name}
                </div>
                <div className="status">
                    <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    <span className="status-text">{props.online ? 'Online' : 'Offline' }</span>
                </div>
            </main>
        </article>
        
    )
}

export default Contact;