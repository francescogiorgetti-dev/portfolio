import NavButton from '../components/ui/NavButton.jsx'
import EmailForm from '../components/EmailForm.jsx'

const Contact = () => {

    return (
        <section id="contact" className="scroll-mt-30">
            <div className="textContainerCenter text-center ml-6 mr-6">
                <p className="light text-sm font-light text-light mb-4">Do you want to hire me or have a chat?</p>
                <p className="medium text-3xl mb-4 text-light text-center">Contact me</p>
                <p className="light text-sm text-light font-light">You can find me on:</p>
                <div className="flex items-center justify-center mt-5 select-none">
                    <a href="https://www.linkedin.com/in/francesco-giorgetti-91857a274/" target="_blank">
                        <svg className="relative w-9 h-9 fill-light mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                    <a href="https://www.github.com/francescogiorgetti-dev/" target="_blank">
                        <svg className="relative w-9 h-9 fill-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <div className="mt-8 select-none">
                    <p className="light text-sm text-light font-light">Want to send me an email? Use this form:</p><br/>
                </div>
                <div className="mt-6 md:flex md:justify-center">
                    <EmailForm />
                </div>
            </div>
            <NavButton
                href='#landing'
                icon={
                    <svg className="relative w-10 h-10 fill-light group-hover:fill-bg transition-colors duration-500" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24,20.8,13.4,31.4a1.9,1.9,0,0,1-3-.2,2.1,2.1,0,0,1,.2-2.7l12-11.9a1.9,1.9,0,0,1,2.8,0l12,11.9a2.1,2.1,0,0,1,.2,2.7,1.9,1.9,0,0,1-3,.2Z" />
                    </svg>
                }
            />
        </section>
    );
}

export default Contact;