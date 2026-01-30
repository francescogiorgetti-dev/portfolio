import Button from './ui/Button.jsx'
import { SVG } from './ui/SVG';
import example from "../../public/img/example.jpg";

const ProjectsCard = ({ title, desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", link1, link2, icons, img = "../../public/img/example.jpg" }) => {
    return (
        <div className="group z-1 transition-transform duration-600 ease-out hover:scale-101">
            <div className="mb-6 p-[1.5px] bg-gradient-to-t from-verylight to-light rounded-2xl transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-t group-hover:from-light group-hover:to-verylight">
                <div className="relative overflow-hidden rounded-2xl bg-bg px-6 py-6 md:px-8 md:py-8 transition-colors duration-700 ease-in-out hover:bg-gradient-to-r hover:from-verydark hover:to-bg">
                    <div><p className="title text-center mb-6 text-3xl text-light md:text-left">{title}</p></div>
                    <div className="flex flex-col gap-6 mb-8 justify-between lg:flex-row-reverse lg:justify-items-end">
                        <div className="mb-6 top-0 md:mb-auto transition-transform duration-600 ease-out hover:scale-101 hover:-rotate-y-4 hover:rotate-x-4"><img className="object-cover lg:max-w-105" src={example}></img></div>
                        <div><p className="light lg:flex-1 text-md font-display text-light font-light font-display lg:text-right lg:text-normal">{desc}</p></div>
                    </div>
                    <div className="flex"><p className="light font-light text-left select-none font-display text-md md:text-normal text-light">Made with:</p>
                        {icons.map(icon =>
                            SVG(icon))
                        }</div>
                    <div className="light justify-start select-none flex mt-6 space-x-3 md:space-x-6" align="left">
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
    );
}

export default ProjectsCard;