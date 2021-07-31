import React, { useRef } from 'react'
import QuoteView from '../View/QuoteView'

const Quote = () => {

    const nameinput = useRef(null);
    const emailinput = useRef(null);
    const telinput = useRef(null);
    const successMsg = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let validName = false;
        let validEmail = false;
        let validTel = false;

        //name validation
        if (nameinput.current.value) {
            nameinput.current.classList.remove("hasEmpty");
            validName = true;
        } else {
            nameinput.current.classList.add("hasEmpty")
        }

        //email validation
        if (emailinput.current.value) {
            emailinput.current.classList.remove("hasEmpty");
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(emailPattern.test(emailinput.current.value)){
                emailinput.current.classList.remove("hasInvalid")
                validEmail = true;
            }else{
                emailinput.current.classList.add("hasInvalid")
            }
            
        } else {
            emailinput.current.classList.add("hasEmpty")
        }

        //number validation
        if (telinput.current.value) {
            telinput.current.classList.remove("hasEmpty");
            var phonePattern = /^\d{10}$/;
            if(phonePattern.test(telinput.current.value)){
                telinput.current.classList.remove("hasInvalid")
                validTel = true;
            }else{
                telinput.current.classList.add("hasInvalid")
            }
            
        } else {
            telinput.current.classList.add("hasEmpty")
        }

        if (validEmail && validName && validTel) {
            telinput.current.value = '';
            emailinput.current.value = '';
            nameinput.current.value = '';
            successMsg.current.classList.add("is-visible");
        }else{
            successMsg.current.classList.remove("is-visible");
        }
    }

    return (
        <QuoteView
            nameinput={nameinput}
            emailinput={emailinput}
            telinput={telinput}
            successMsg={successMsg}
            handleSubmit={handleSubmit}
        />
    )
}

export default Quote
