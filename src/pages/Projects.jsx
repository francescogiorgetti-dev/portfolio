import ProjectsCard from '../components/ProjectsCard.jsx'

const Projects = () => {

    return (
        <section id="projects" className="scroll-mt-30">
            <div className="textContainerRight ml-6 mr-6 mb-25">
                <p className="tiny text-[8px] font-display text-right text-light select-none">You came for these, didn't you?</p>
                <p className="medium text-3xl mb-6 text-right text-light">My projects</p>
                <div className="relative">
                    <ProjectsCard
                        title='VINTG'
                        desc='
                        Als Zarathustra dreissig Jahr alt war, verliess er seine Heimat und den
                                    See seiner Heimat und ging in das Gebirge. Hier genoss er seines
                                    Geistes und seiner Einsamkeit und wurde dessen zehn Jahr nicht müde.
                                    Endlich aber verwandelte sich sein Herz,—und eines Morgens stand er mit
                                    der Morgenröthe auf, trat vor die Sonne hin und sprach zu ihr also:
                                    „Du grosses Gestirn! Was wäre dein Glück, wenn du nicht Die hättest,
                                    welchen du leuchtest!
                                    Zehn Jahre kamst du hier herauf zu meiner Höhle: du würdest deines
                                    Lichtes und dieses Weges satt geworden sein, ohne mich, meinen Adler
                                    und meine Schlange.
                                    Aber wir warteten deiner an jedem Morgen, nahmen dir deinen Überfluss
                                    ab und segneten dich dafür.
                                    Siehe! Ich bin meiner Weisheit überdrüssig, wie die Biene, die des
                                    Honigs zu viel gesammelt hat, ich bedarf der Hände, die sich
                                    ausstrecken.
                                    Ich möchte verschenken und austheilen, bis die Weisen unter den
                                    Menschen wieder einmal ihrer Thorheit und die Armen einmal ihres
                                    Reichthums froh geworden sind.
                        '
                        icons={['html', 'tailwind', 'nextjs', 'typescript', 'postgre']}
                    />
                    <ProjectsCard
                        title='U-WANN'
                        desc='
                        Als Zarathustra dreissig Jahr alt war, verliess er seine Heimat und den
                                    See seiner Heimat und ging in das Gebirge. Hier genoss er seines
                                    Geistes und seiner Einsamkeit und wurde dessen zehn Jahr nicht müde.
                                    Endlich aber verwandelte sich sein Herz,—und eines Morgens stand er mit
                                    der Morgenröthe auf, trat vor die Sonne hin und sprach zu ihr also:
                                    „Du grosses Gestirn! Was wäre dein Glück, wenn du nicht Die hättest,
                                    welchen du leuchtest!
                                    Zehn Jahre kamst du hier herauf zu meiner Höhle: du würdest deines
                                    Lichtes und dieses Weges satt geworden sein, ohne mich, meinen Adler
                                    und meine Schlange.
                                    Aber wir warteten deiner an jedem Morgen, nahmen dir deinen Überfluss
                                    ab und segneten dich dafür.
                                    Siehe! Ich bin meiner Weisheit überdrüssig, wie die Biene, die des
                                    Honigs zu viel gesammelt hat, ich bedarf der Hände, die sich
                                    ausstrecken.
                                    Ich möchte verschenken und austheilen, bis die Weisen unter den
                                    Menschen wieder einmal ihrer Thorheit und die Armen einmal ihres
                                    Reichthums froh geworden sind.
                        '
                        icons={['html', 'tailwind', 'react', 'typescript', 'rubyrails', 'postgre']}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;