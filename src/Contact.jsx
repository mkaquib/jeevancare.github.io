import React, { useState } from 'react'

export default function Contact() {

    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    });

    const inputEvent = (e) =>{
        const {name,value}= e.target;

        setData((oldval)=>{
                return {...oldval,[name]:value};
        })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`my name is ${data.fullname}. My mobile number is ${data.phone}. my email address is ${data.email} and my query is ${data.msg}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container container_div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullname" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Mobile No.</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Your MObile" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Your Email Address !optional" />
                    </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
                        </div>

                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                    </form>
                    </div>
                </div>

            </div>
            
        </>
    )
}
