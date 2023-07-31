import Link from 'next/link'

import {MyNavBar} from "../components/modules/MyNavBar";
import {MyPageBanner} from "../components/modules/MyPageBanner";
import {MyFooter} from "../components/modules/MyFooter";


export default function Index() {
    return (
        <main className={""}>
            {/*Banner*/}
            <MyPageBanner/>
            <div className="p-10 text breadcrumbs">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>About</li>
                </ul>
            </div>

            {/*Main Content*/}
            <div className={"container mx-auto"}>
                <h2 className={"text-2xl font-bold py-2"}>About</h2>
                <div>This is V2 of the doomometer. Its a tongue-in-cheek so dont take it too seriously.  There certainly isnt much science behind the metrics.</div>
                <div>The original collected lots more data but both are a chance for me to try out new technology.
                </div>
                <div className={"py-6"}>The application uses the following technologies:</div>
                <div className={"flex flex-wrap"}>
                    <div className={"w-1/2"}>
                        <ul className={"list-disc px-6"}>
                            <li><Link href={"https://nextjs.org"}>Next.js (Web framework)</Link></li>
                            <li><Link href={"https://reactjs.org"}>React (Web development)</Link></li>
                            <li><Link href={"https://www.typescriptlang.org"}>TypeScript (Web development)</Link></li>
                            <li><Link href={"https://tailwindcss.com"}>TailwindCSS (CSS)</Link></li>
                            <li><Link href={"https://daisyui.com"}>DaisyUI (CSS)</Link></li>
                            <li><Link href={"https://vercel.com"}>Vercel (Hosting)</Link></li>
                            <li><Link href={"https://www.cloudflare.com"}>CloudFlare (Routing)</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={"mx-auto py-5"}>Here are some links to other stuff I do...</div>
                <ul className={"list-disc px-6"}>
                    <li><Link href={"https://Bitwrangler.uk"}>BitWrangler.uk</Link></li>
                    <li><Link href={"https://github.com/gpimblott"}>My GitHub</Link></li>
                </ul>
            </div>
            <MyFooter/>
        </main>
    )
}
