const NavButton = ({ href, icon }) => {

    return (
        <div className="button">
            <a href={href} className="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden font-semibold bg-transparent group border-2 border-white rounded-full cursor-pointer">
                <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-150 transition-transform duration-500"></span>
                {icon}
            </a>
        </div>
    );
};

export default NavButton;