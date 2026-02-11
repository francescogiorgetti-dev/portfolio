import Carousel from '../components/ui/Carousel.jsx'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutMe = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (

        <section id="about" className="scroll-mt-30">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{
                    once: true,
                    amount: isMobile ? 0.3 : 0.5
                }}
            >
                <div className="textContainerLeft ml-6 mr-6 mb-25">
                    <p className="medium text-3xl mb-6 text-light">A little something about me</p>
                    <div className="[perspective:2000px]">
                        <div className="group transition-transform duration-600 ease-out hover:scale-101 hover:rotate-y-3 hover:rotate-x-3">
                            <div className="p-[1.5px] bg-gradient-to-t from-verylight to-light rounded-2xl transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-t group-hover:from-light group-hover:to-verylight">
                                <div className="relative rounded-2xl h-full w-full bg-bg px-6 py-6 md:px-8 md:py-8 transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-r group-hover:from-verydark group-hover:to-bg">
                                    <span className="light text-light">I was born in a town close to the bustling renaissance streets of Florence, 
                                        surrounded by both art and innovation. In my hometown's high school I began approaching the fascinating world 
                                        of full stack web-developing, as part of my academic curriculum. What used to be barebones HTML static pages 
                                        steadily transformed into small experiments with PHP forms, JavaScript and MySQL. The more I built, 
                                        the more I loved seeing my ideas come to life on a computer screen.<br></br>
                                        After graduating, I didn't want to stop learning. I dove deeper into full-stack development, adopting new tools 
                                        and technologies that I still use today.<br></br>
                                        Today, I'm looking forward to putting my knowledge and experience into action with a thrilling and inspiring work 
                                        experience that can motivate me and give me new opportunities to further expand my realm of expertise.
                                        I can develop full-stack web solutions and have a particular fondness for UI/UX design, 
                                        and I always like a good challenge that can put me to the test and can offer me an occasion to grow.
                                    </span>
                                    <div className="mt-6 mb-6">
                                        <p className="light mb-6">The tools I use:</p>
                                        <Carousel />
                                    </div>
                                    <span className="light text-light">
                                        ...but I'm always learning something new!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default AboutMe;