import React from "react";
import Image from "next/image";
import Link from "next/link";

export function MyFooter() {
    return (
        <>
            <div className={"pt-5"}>
                <footer className="footer bg-gray-800 p-5 text-base-content w-full ">
                    <div>
                        <Image src={"/bitwrangler-logo.png"} width={60} height={60} alt={"BitWrangler Company Logo"}/>
                        <p><Link href={"https://bitwrangler.uk"}>BitWrangler</Link><br/>Providing reliable tech since
                            the
                            1990&apos;s</p>
                    </div>
                    <div>
                        <span className="footer-title">Information</span>
                        <Link className="link link-hover" href={"/about"}>About</Link>
                        <Link className="link link-hover" href={"/contact"}>Contact</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}