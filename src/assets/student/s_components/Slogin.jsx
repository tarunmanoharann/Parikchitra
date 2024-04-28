import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../s-css/Slogin.css';

const Slogin = () => {
    const [action, setAction] = useState("Login");

    const handleSubmit = () => {
        if (action === "Login") {
        } else if (action === "Sign Up") {
        }

    };
   
    const nav = useNavigate();

    return (
        <div className='Slogin-container'>
            <div className="submit-container">
                <div className={action === "Register" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Register") }}>Register</div>
            </div>
            <div className="inputs">
                {action === "Login" ? (
                    <>

                        <div className="input">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Password" />
                        </div>

                       
                    </>
                ) : (
                    <>
                        
                        <div className="input">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Confirm Password" />
                        </div>
                       
                    </>
                )}
            </div>


            
            <div className="login-button-container">
                <button className="login-button"  onClick={()=>nav('/shome')}>Submit</button>
            </div>
        </div>
    );
};

export default Slogin;
