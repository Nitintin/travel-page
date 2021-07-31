import React from 'react'

const QuoteView = ({nameinput,emailinput,telinput,successMsg,handleSubmit}) => {
    return (
        <section id="quoteSection">
            <h3>Travelling a group? Get a Quote</h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="inputContainer">
                    <label htmlFor="userName">Your Name</label>
                    <br />
                    <input type="text" className="name" id="userName" ref={nameinput}/>
                    <p className="emptyErrorMsg">Name is required</p>
                </div>
                <div className="inputContainer">
                    <label htmlFor="contact">Contact No</label>
                    <br />
                    <input type="text" id="contact" ref={telinput} />
                    <p className="emptyErrorMsg">Contact No is required</p>
                    <p className="invalidErrorMsg">Invalid Contact No</p>
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" id="email" ref={emailinput} />
                    <p className="emptyErrorMsg">Email is required</p>
                    <p className="invalidErrorMsg">Invalid Email</p>
                </div>
                <div className="successMsg" ref={successMsg}>We hear you! We will get back to you for planning your vacation</div>
                <input type="submit" value="SUBMIT" className="gradient"/>
            </form>
        </section>
    )
}

export default QuoteView
