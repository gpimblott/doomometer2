import Link from 'next/link'

export function MyNavBar() {
    return (
        <nav>
            <div className="container mx-auto px-5 py-2 flex justify-between items-center">
                <Link className="font-bold lg:text-xl" href="/">Doomometer</Link>
                <div className="hidden md:block lg:block">
                    <ul className="inline-flex">
                        <li><Link className="px-4 hover:text-gray-600" href={"/"}>Home</Link></li>
                        <li><Link className="px-4 hover:text-gray-600" href={"./about"}>About</Link></li>
                        <li><Link className="px-4 hover:text-gray-600" href={"#"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>)
}