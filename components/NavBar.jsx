import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-10 ">
                <li>
                    <Link href="/" className="font-bold font-orbitron text-orange-800 hover:underline">
                    Indie Game
                    </Link>
                </li>
                <li className="ml-auto">
                   <Link href="/reviews" className="text-orange-800 hover:underline" >
                   Reviews
                   </Link>
                </li>
                <li>
                   <Link href="/about" prefetch= {false} className="text-orange-800 hover:underline" >
                   About
                   </Link>
                </li>
            </ul>
        </nav>
    );
    }