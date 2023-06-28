import {Component} from "react";

export class BaseCard extends Component<{
    count: number,
    name: string,
    direction: number,
    duration: number | string,
    message: string
}> {
    render() {
        const directionAbs = Math.abs(this.props.direction);
        let textColour = '';
        let directionText = '';
        let image = '';

        if (this.props.direction == 0) {
            textColour = '';
            directionText = '-';
        } else if (this.props.direction > 0) {
            textColour = "text-red-600";
            directionText = 'up ' + directionAbs;
            image = '/doomometer-logo2.png';
        } else {
            textColour = "text-green-600";
            directionText = 'down ' + directionAbs;
            image = '/earth.png';
        }

        return (
            <div className="p-4 bg-gray-300 rounded-xl text-gray-800">

                <div className={"flex"}>
                    <div className={"grid content-start grid-cols-1 flex-auto w-4/5"}>
                        <div className="bg-blend-color-dodg text-center">
                            <span className={'text-2xl font-bold'}>
                                <span className={` ${textColour}`}>
                                    <span className={`leading-none`}>
                                        {this.props.count}
                                    </span>
                                </span>
                                <span> ( </span>
                                {/*<p className={`${arrowDirection}`}></p>*/}
                                <span> {directionText} ) </span>
                            <span className={``}> {this.props.name}</span>
                        </span>
                        </div>
                        <div className={"text-center"}>
                            <span className={`font-bold`}>{this.props.message} </span><span
                            className={"font-bold text-red-600"}>{this.props.duration}</span>
                        </div>
                    </div>

                    <div className={"flex-auto w-1/5"}>
                        {image ?
                            <img src={image} width={"50"} height={"50"}/>
                            : <div/>}
                    </div>
                </div>
            </div>
        )
    }
}