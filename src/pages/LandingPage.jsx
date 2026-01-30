import Dots from '../components/Dots.jsx'
import NavButton from '../components/ui/NavButton.jsx'
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
    return (
        <section id="landing" >
            <div className="parent-landing">
                <div className="canvas"><Dots /></div>
                <div className="child-landing">
                    <p className="light text-sm font-display mb-6 text-light">Hello! I'm Francesco. But you can call me</p>
                    <div className="big text-5xl text-white font-normal">
                        <Typewriter
                            options={{
                                strings: ['Francis', 'François', 'Francisco', 'Franz', 'Franciszek', 'Frantsisk', 'Fragiskos', 'Ferenc'],
                                autoStart: true,
                                loop: true,
                            }} />
                    </div>
                    <p className="light text-sm font-display mt-6 text-light">And I'm an aspiring <span className="group text-white duration-500 ease-in-out hover:font-semibold"><span className="bg-clip-text transition-colors duration-500 ease-in-out group-hover:text-transparent group-hover:bg-gradient-to-t group-hover:from-rose-500 group-hover:to-rose-700">Web Developer</span></span>.</p>
                </div>
                <NavButton
                    href='#about'
                    icon={
                        <svg className="relative justify-center w-10 h-10 fill-light group-hover:fill-bg transition-colors duration-500" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24,27.2,13.4,16.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l12,11.9a1.9,1.9,0,0,0,2.8,0l12-11.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2Z" />
                        </svg>
                    }
                />
            </div>
        </section>
    );

}

export default LandingPage;