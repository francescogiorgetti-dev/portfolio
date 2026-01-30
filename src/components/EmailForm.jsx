import { SVG } from '../components/ui/SVG.jsx';
import Button from '../components/ui/Button.jsx'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const form = useRef();

    let buttonText = "Send";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fkdg0nz', 'template_336cglb', form.current, {
                publicKey: '-ZOHpM4TChwasBn4m',
            })
            .then(
                () => {
                    console.log('email sent successfully');
                    document.getElementById("send").innerHTML= "E-mail sent!";
                },
                (error) => {
                    console.log('failed to send email: ', error.text);
                    document.getElementById("send").innerHTML = "There was an error, please try again";
                },
            );
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="w-full max-w-2xl mx-auto">
                <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-4 justify-center">
                        <div>
                            <label for="fname"><p className="font-display font-light text-sm mb-2 select-none text-left">First Name</p></label>
                            <div className="px-2 w-full md:px-4 py-2 text-xs md:text-sm items-center font-display font-normal text-bg bg-bg group border-2 border-light rounded-md">
                                <input type="text" id="fname" name="fname" className="font-display text-normal text-light w-full bg-transparent focus:outline-none" required></input>
                            </div>
                        </div>
                        <div>
                            <label for="lname"><p className="font-display font-light text-sm mb-2 select-none text-left">Last Name</p></label>
                            <div className="px-2 w-full md:px-4 py-2 text-xs md:text-sm items-center font-display font-normal text-bg bg-bg group border-2 border-light rounded-md">
                                <input type="text" id="lname" name="lname" className="font-display text-normal text-light w-full bg-transparent focus:outline-none" required></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <label for="email"><p className="font-display font-light text-sm mb-2 select-none text-left">Email</p></label>
                    <div className="flex-initial inline-flex px-2 w-full md:px-4 py-2 text-xs md:text-sm items-center font-display font-normal text-bg bg-bg group border-2 border-light rounded-md">
                        {SVG("email")}
                        <input type="email" id="email" name="email" className="font-display text-normal text-light w-full bg-transparent focus:outline-none" required></input>
                    </div>
                </div>
                <div className="mb-6">
                    <label for="message"><p className="font-display font-light text-sm mb-2 select-none text-left">Your message</p></label>
                    <div className="px-2 md:px-4 py-2 text-xs md:text-sm items-center font-display font-normal text-bg bg-bg group border-2 border-light rounded-md">
                        <textarea name="message" className="font-display w-full resize-none text-normal text-light focus:outline-none" rows={10} cols={160} required />
                    </div>
                </div>
                <div>
                    <button id="send" type="submit" className="whitespace-nowrap w-full justify-center px-2 md:px-4 py-2 inline-flex text-xs md:text-sm items-center font-display font-normal text-bg bg-light group border-2 border-light rounded-md cursor-pointer hover:bg-bg hover:text-light transition-colors duration-500">
                        Send
                        {SVG("send")}
                    </button>
                </div>
                <div className="mb-6 mt-4">
                    <p className="font-display font-light text-sm select-none text-left">If you prefer, you can always send an email to <span className="text-white transition-all duration-300 ease-in-out hover:hover:text-shadow-sm text-shadow-light">
                        <a href="mailto:francescogiorgettidev@aol.com">francescogiorgettidev@aol.com</a>
                    </span></p>
                </div>
            </div>
        </form>
    )
}

export default EmailForm;