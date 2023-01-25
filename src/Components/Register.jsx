import { useState } from "react"
import style from "./registerstyle.module.css"

const Register = () =>{

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mob, setMob] = useState("");

    let nameData = (e) =>{
        setName(e.target.value);
    }
    let emailData = (e) =>{
        setEmail(e.target.value);
    }
    let mobData = (e) =>{
        setMob(e.target.value);
    }

    let regBtn = () =>{
        console.log(name);
        console.log(email);
        console.log(mob);
    }
    return(
        <div>
            <section id = {style.form}>
                <article>
                <div className = {style.info}>
                    <h1>GET IN TOUCH</h1><br />
                    <p>please complete the form and we will get back to you.</p>
                </div>

                <div className = {style.regForm}>
                    <label>Name *</label><br />
                    <input type="text" placeholder="Enter full name" value = {name} onChange ={nameData}/><br /><br />
                    <label>Email *</label><br />
                    <input type="email" placeholder="Enter email address" value = {email} onChange ={emailData}/><br /><br />
                    <label>Mobile Number *</label><br />
                    <input type="tel" placeholder="Enter mobile number" value = {mob} onChange ={mobData}/><br /><br />
                    <button onClick = {regBtn}>Register Now</button>
                </div>
                </article>
            </section>
        </div>
    )
}
export default Register