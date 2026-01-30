const NavBar = ({ activeSection }) => {

    const sections = [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div className="sticky z-3 top-0 flex items-center justify-center">
            <div className="py-7">
                <nav className="px-8 py-4 flex gap-8 font-semibold bg-bg/90 group border-2 border-light rounded-full select-none">
                    {sections.map(section => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`font-light transition-all duration-300 ease-in-out ${activeSection === section.id
                                    ? 'text-white hover:hover:text-shadow-sm text-shadow-light'
                                    : 'light text-light font-light hover:text-shadow-sm text-shadow-light'
                                }`}
                        >
                            {section.label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default NavBar;