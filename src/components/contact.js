import React from 'react';
import './contact.css';
//import { checkPropTypes } from 'prop-types';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            online : props.status
         }
    }
    render() { 
        return (
            <article className="Contact">
            <aside>
                 <img className="avatar" src={this.props.avatar}></img>  
            </aside>
            <main>
                <div className="name">
                    {this.props.name}
                </div>
                <div  onClick={event => {const statusOnOff = !this.state.online
                this.setState({online : statusOnOff})}} className="status">
                    <span className={this.state.online ? 'status-online' : 'status-offline'}></span>
                    <span className="status-text">{this.state.online ? 'Online' : 'Offline' }</span>
                </div>
            </main>
        </article>
          );
    }
}
 
export default Contact;

// const Contact = (props) => {
//     return(
//         <article className="Contact">
//             <aside>
//                  <img className="avatar" src={props.avatar}></img>  
//             </aside>
//             <main>
//                 <div className="name">
//                     {props.name}
//                 </div>
//                 <div className="status">
//                     <span className={props.status ? 'status-online' : 'status-offline'}></span>
//                     <span className="status-text">{props.status ? 'Online' : 'Offline' }</span>
//                 </div>
//             </main>
//         </article>
        
//     )
// }

// export default Contact;