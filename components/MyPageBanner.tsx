import Image from 'next/image'

export function MyPageBanner() {
    return (<div
        className="py-6 flex flex-row space-x-4 px-10 box-decoration-slice bg-gradient-to-r from-gray-800 to-gray-600">
        <div className={"shrink-0"}>
            <Image src={"/doomometer-logo2.png"}
                   alt={"Doomometer logo"}
                   width={150} height={150}/>
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-2 text-white">
                Doom-o-meter
            </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
                Is it as bad as it looks?
            </h3>
        </div>
    </div>)
}
