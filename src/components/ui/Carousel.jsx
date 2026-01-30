import { SVG } from './SVG.jsx';
import LogoBox from './LogoBox.jsx';


const Carousel = () => {

    return (
        <div className="w-full md:w-150 inline-flex flex-nowrap overflow-hidden select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none infinite-scroll">
                <li>
                    <LogoBox 
                        name='html'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='tailwind'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='postgre'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='javascript'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='react'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='python'
                    />
                </li>
            </ul>
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none infinite-scroll">
                <li>
                    <LogoBox 
                        name='html'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='tailwind'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='postgre'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='javascript'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='react'
                    />
                </li>
                <li>
                    <LogoBox 
                        name='python'
                    />
                </li>
            </ul>
        </div >
    )
}

export default Carousel;