const Button = ({ text, icon, href }) => {

    return (
        <button href={href} className="whitespace-nowrap px-2 md:px-4 py-2 inline-flex text-xs md:text-sm items-center font-display font-normal text-bg bg-light group border-2 border-light rounded-md cursor-pointer hover:bg-bg hover:text-light transition-colors duration-500">{text}
            {icon}
        </button>
    );

}

export default Button;