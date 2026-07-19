import {  Code, Settings, User } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl fon-semibold" >Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                        Ich absolviere derzeit die Fachhochschulreife im Bereich
                        Informatik an der Karl-Hofmann-Schule BBS Worms und möchte
                        anschließend eine Ausbildung im Bereich Informatik oder Automatisierungstechnik beginnen.
                        
                    </p>

                    <p className="text-muted-foreground">
                        Ich Zeichne mich durch Ehrgeiz, Lernbereitschaft und Kreativität aus.
                        Neue technologien und Herausforderungen motivieren mich, mein Wissen 
                        kontinuierlich auszubauen und praktische Lösungen zu entwickeln
                    </p>

                    <p className="text-muted-foreground">
                        Mit meinem Portfolio möchte ich meine bisherigen Kenntnisse und Projekte präsentieren 
                        und ein Unternehmen finden, bei dem ich im Rahmen eines Duales Studium den nächsten 
                        Schritt in meiner Karriere gehen kann.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transit"> 
                        Download CV
                        </a>

                    </div>

                </div>



                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Anwendungsentwicklung</h4>
                                <p className="text-muted-foreground">
                                    Erstellung responsiver Websites und
                                    Anwendungen mit modernen Frameworks.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                            <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Entwicklung einer intuitiven Benutzeroberfläche
                                    und eines nahtlosen Benutyzrerlebnisses.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                            <Settings className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">PCB</h4>
                                <p className="text-muted-foreground">
                                    Anbindung von Leiterplatten an Geräte wie 
                                    Arduino für Automatisierungsaufgaben.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



        </div>

    </section>
    );
}