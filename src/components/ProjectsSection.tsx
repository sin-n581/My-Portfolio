import { ExternalLink } from "lucide-react";

const projects =[
    {
        id: 1,
        title:"Sinopoly Game",
        description: "ein Spiel im Stil von 'Monopoly' mit viel Kreativität. Die Entwicklung dieses Spiels hat mir unglaublich spaß gemacht. ",
        image:"/projects/SinopolyImage.png",
        tags:["C#","Windows Forms"],
        gitHubURL: "https://github.com/sin-n581/SINOPOLY.git"
    },
     {
        id: 2,
        title:"PORTFOLIO WEBSITE",
        description: "Meine Profil-Website, die ich erstellt habe, um meine Projekte und Fähigkeiten zu präsentieren.",
        image:"/projects/PortfolioImage.png",
        tags:["TypeScript","React", "TailwindCSS"],
        gitHubURL: "https://github.com/sin-n581/My-Portfolio.git"
    },
     {
        id: 3,
        title:"TO DO LIST",
        description: "Ein Projekt, bei dem ich viel über Backend-Entwicklung und Node.js gelernt habe.",
        image:"/projects/To-Do-List.jpg",
        tags:["JavaScript","Node.js","React"],
        gitHubURL: "https://github.com/sin-n581/TO-DO-LIST.git"
    }
];

export const ProjectsSection =() => {
    return ( 
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md-text-4xl font-bold mb-4 text-center ">
                Featured<span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Hier sind einige meiner Projekte. Jedes Projekt wurde mit viel Liebe zum 
                Detail, mit Blick auf die Leistung und die Benutzerfreundlichkeit sorgfältig umgesetzt.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=> (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                                

                            </div>

                        

                        <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className ="flex space-x-3">
                                <a 
                                href={project.gitHubURL} 
                                target="_blank"
                                className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                                > 
                                    <ExternalLink size={20}/> 
                                </a>
                            </div>

                        </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    </section>
    

);

};