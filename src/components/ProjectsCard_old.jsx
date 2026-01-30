import Button from './ui/Button.jsx'
import { SVG } from './ui/SVG';

const ProjectsCard = ({ title, desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", link1, link2 }) => {

    return (
        <div className="group transition-transform duration-600 ease-out hover:scale-101 snap-center">
            <div className="mb-6 p-[1.5px] bg-gradient-to-t from-verylight to-light rounded-2xl transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-t group-hover:from-light group-hover:to-verylight">
                <div className="card relative rounded-2xl h-full w-full bg-bg px-6 py-6 transition-colors duration-700 ease-in-out hover:bg-gradient-to-r hover:from-verydark hover:to-bg">
                    <div></div>
                    <div><p className="title text-center text-3xl text-light">{title}</p></div>
                    <div><p className="light font-display text-light" align="right">{desc}</p></div>
                    <div className="transition-transform duration-600 ease-out hover:scale-101 hover:rotate-y-4 hover:rotate-x-8"><img src="src/assets/example.jpg" width="427px" height="240px" align="right"></img></div>
                    <div><p className="light text-light" align="left">Made with:</p></div>
                    <div></div>
                    <div className="light flex mt-5 space-x-6" align="left">
                        <Button
                            text="Live Demo"
                            icon={
                                SVG('demo')
                            }
                            href=''
                        />
                        <Button
                            text="View on GitHub"
                            icon={
                                SVG('github')
                            }
                            href=''
                        />
                    </div>
                </div>
            </div>

            <div className="group transition-transform duration-600 ease-out hover:scale-101 snap-center">
                <div className="mb-6 p-[1.5px] bg-gradient-to-t from-verylight to-light rounded-2xl transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-t group-hover:from-light group-hover:to-verylight">
                    <div className="relative rounded-2xl h-full w-full bg-bg px-8 py-8 transition-colors duration-700 ease-in-out hover:bg-gradient-to-r hover:from-verydark hover:to-bg">
                        <div><p className="title text-left mb-6 text-3xl text-light">{title}</p></div>
                        <div className="md:flex-row-reverse justify-start items-start space-x-4 mb-6">
                            <div className="object-cover transition-transform duration-600 ease-out hover:scale-101 hover:rotate-y-4 hover:rotate-x-8"><img src="src/assets/example.jpg" width="427px" height="240px" align="right"></img></div>
                            <div><p className="light max-w-190 font-display text-light" align="right">{desc}</p></div>
                        </div>
                        <div><p className="light text-light" align="left">Made with:</p></div>
                        <div className="light justify-center md:justify-start flex mt-8 space-x-3 md:space-x-6" align="left">
                            <Button
                                text="Live Demo"
                                icon={
                                    SVG('demo')
                                }
                                href=''
                            />
                            <Button
                                text="View on GitHub"
                                icon={
                                    SVG('github')
                                }
                                href=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProjectsCard;