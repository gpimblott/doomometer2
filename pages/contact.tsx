import Link from "next/link";
import React from "react";
import {MyPageBanner} from "doom/components/modules/MyPageBanner";
import {MyFooter} from "doom/components/modules/MyFooter";

export default function Explore() {
    return (
        <main className="">
            {/*Banner*/}
            <MyPageBanner/>

            <div className="p-10 text breadcrumbs">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="px-10 ">
                <h1 className={"text-4xl text-bold"}>Contact</h1>
                <p className={""}>
                    <Link className={"link"} href={"https://bitwrangler.uk"}>BitWrangler</Link><br/>Providing reliable tech
                    since the 1990&apos;s
                </p>
            </div>
            <MyFooter></MyFooter>
        </main>
    );
}