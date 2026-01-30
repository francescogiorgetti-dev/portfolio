import { useState, useEffect } from 'react';

export function UseScrollSpy(sections) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const observers = sections.map(sectionId => {
            const element = document.getElementById(sectionId);

            const margins = (screenWidth < 768) ? '0px 0px -5% 0px' : '-100px 0px -50% 0px';

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(sectionId);
                    }
                },
                {
                    rootMargin: margins
                }
            );

            if (element) observer.observe(element);
            return observer;
        });

        return () => observers.forEach(obs => obs.disconnect());
    }, [sections]);

    return activeSection;
}
