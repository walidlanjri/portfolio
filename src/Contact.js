import {useState } from "react";
import phone from "./Images/icons/telephone-call.png";
import mail from "./Images/icons/email.png";
import location from "./Images/icons/placeholder.png";
import linkedin from "./Images/icons/linkedin.png";
const Contact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    return ( 
        <div className="contact">
            <h2>CONTACT ME</h2>
            <div className="container">
                <div className="left">
                    <div className="info"><img className="icon" id="phoneIcon" src={phone} /> +212 614 866 210</div>
                    <div className="info"><img className="icon" id="mailIcon" src={mail} />waleedlanjri@gmail.com</div>
                    <div className="info"><img className="icon" id="locationIcon" src={location} />Tangier,Morocco</div>
                    <div className="info"><img className="icon" id="inIcon" src={linkedin}/><a href="https://www.linkedin.com/in/walid-lanjri-8692b51b4/"> walid lanjri</a> </div>
                    
                </div>

                <div className="right">
                    <label htmlFor="FullName">Your name</label>
                    <input type="text" 
                        id="FullName" 
                        onChange={(event)=>setName(event.target.value)}
                        value={name}
                    />

                    <label htmlFor="email">Your email</label>
                    <input 
                        type="email" 
                        id="email" 
                        onChange={(event)=>setEmail(event.target.value)}
                        value={email}
                    />

                    <label htmlFor="message">Your message</label>
                    <textarea  
                        id="message" 
                        cols="30" 
                        rows="10" 
                        onChange={(event)=>setMessage(event.target.value)}
                        value={message}
                    > </textarea>
                    <button>Submit</button>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;