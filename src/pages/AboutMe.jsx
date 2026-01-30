import Carousel from '../components/ui/Carousel.jsx'

const AboutMe = () => {

    return (
        <section id="about" className="scroll-mt-30">
            <div className="textContainerLeft ml-6 mr-6 mb-25">
                <p className="medium text-3xl mb-6 text-light">A little something about me</p>
                <div className="[perspective:2000px]">
                    <div className="group transition-transform duration-600 ease-out hover:scale-101 hover:rotate-y-3 hover:rotate-x-3">
                        <div className="p-[1.5px] bg-gradient-to-t from-verylight to-light rounded-2xl transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-t group-hover:from-light group-hover:to-verylight">
                            <div className="relative rounded-2xl h-full w-full bg-bg px-6 py-6 md:px-8 md:py-8 transition-colors duration-700 ease-in-out group-hover:bg-gradient-to-r group-hover:from-verydark group-hover:to-bg">
                                <span className="light text-light">Als Zarathustra dreissig Jahr alt war, verliess er seine Heimat und den
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
        </section>
    );
}

export default AboutMe;