import Image from 'next/image'

export function MyPageBanner() {
    return (<div
        className="py-6 flex flex-row space-x-4 px-10 bg-gray-800">
        <div className={"shrink-0"}>
            <Image src={"/doomometer-logo2.png"}
                   alt={"Doomometer logo"}
                   width={125} height={125}/>
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-2 text-white">
                Doom-o-meter
            </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
                Doomed or not Doomed - that is the question?
            </h3>
        </div>
    </div>)
}
