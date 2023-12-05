import Link from "next/link";
import NavBar from "../components/NavBar";
import { orbitron } from "./fonts";
import "./globals.css";

export default function Rootlayout ({children}){
    return (
        <html lang="en" className={orbitron.variable}>
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen" >
                <header>
                    <NavBar/>
                </header>
            <main className="grow py-3"> 
            {children}
            </main>
            <footer className="border-t py-3 text-center text-xs">
                Game Date and Images courtesy of <a href="https://rawg.io/games" target="_blank" className="text-orange-800 hover:underline">RAWG</a>
            </footer>
            </body>
        </html>
    )
}


