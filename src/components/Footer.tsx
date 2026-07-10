import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return <footer className="py-12 px-4 bg-primary/10 transit relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between">
        <p className="text-sm text-muted-foreground"> 
            &copy; {new Date().getFullYear()} Sinan Sacan. All rights reserved.
            </p>

        <a href="#hero" className="p-2 rounded-full bg-card hover:bg-primary/20 text-primary transition-colors"> <ArrowUp /> </a>
    </footer>
}