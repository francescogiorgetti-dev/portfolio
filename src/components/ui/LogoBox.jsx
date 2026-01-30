import { SVG } from './SVG.jsx';

const LogoBox = ({ name = "null", title = "null", icon = "null" }) => {

    if (!title === "null" && !icon === "null") {
        return (
            <span className="px-2 md:px-4 py-2 inline-flex text-xs md:text-sm items-center font-display font-normal text-bg bg-stone-800 group rounded-md cursor-pointer">
                <p>{title}</p>
                {SVG({ icon })}
            </span>
        )
    } else {
        switch (name) {
            case "tailwind":
                title = 'Tailwind';
                icon = 'tailwind';

                break;

            case "postgre":
                title = 'PostgreSQL';
                icon = 'postgre';

                break;

            case "javascript":
                title = 'JavaScript';
                icon = 'javascript';

                break;

            case "react":
                title = 'React';
                icon = 'react';

                break;

            case "python":
                title = 'Python';
                icon = 'python';

                break;

            case "html":
                title = 'HTML5';
                icon = 'html';

                break;

            case "rubyrails":
                title = 'Ruby on Rails';
                icon = 'rubyrails';

                break;

            case "nextjs":
                title = 'Next.js';
                icon = 'nextjs';

                break;

            case "rust":
                title = 'Rust';
                icon = 'rust';

                break;

            case "typescript":
                title = 'TypeScript';
                icon = 'typescript';

                break;

            default:
                title = 'N/A';
                icon = 'null';

                break;

        }
        return (
            <span className="px-2 md:px-4 py-2 flex inline-flex text-xs md:text-sm items-center font-display font-normal text-bg bg-stone-800 group rounded-md cursor-pointer">
                <p>{title}</p>
                {SVG(icon)}
            </span>
        )
    }
}

export default LogoBox;