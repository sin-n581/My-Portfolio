import { ArrowDown } from "lucide-react"
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa"

export const HeroSection = () => {
    return <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    > 

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hallo, Ich bin </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 "> Sinan </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 "> Sacan </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Ich entwickle moderne Anwendungen mit Fokus auf
                    sauberen Code, ansprechendes Design und eine
                    gute Benutzererfahrung.
                </p>

                <div className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 pt-3 ">
                        <h4 className=" mb-4 hover:text-primary transition-colors"> <a href="mailto:sacans581@gmail.com ">sacans581@gmail.com</a> </h4>
                        <div className="flex space-x-4 justify-center text-primary">
                                <a href="https://discord.com/users/1520548872819310746_" target="_blank">
                                    <FaDiscord className="h-6 w-6 "/>
                                </a>
                
                                <a href="https://github.com/sin-n581" target="_blank">
                                    <FaGithub className="h-6 w-6 "/>
                                </a>
                
                                <a href="https://instagram.com/sin.n_scn" target="_blank">
                                    <FaInstagram className="h-6 w-6 "/>
                                </a>
                
                        </div>
                 </div>
            </div>
        </div>
    

        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        
            <span className="rext-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
            
        </a>
    </section>
}