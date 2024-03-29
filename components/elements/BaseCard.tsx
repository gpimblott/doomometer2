import {Component} from "react";
import Image from 'next/image'

export class BaseCard extends Component<{
    count: number,
    name: string,
    direction: number,
    duration: number | string,
    message: string
}> {
    render() {
        const directionAbs = Math.abs(this.props.direction);
        let textColour;
        let directionText;
        let image;

        if (this.props.direction == 0) {
            directionText = 'No change';
            textColour = 'text-info';
        } else if (this.props.direction > 0) {
            directionText = 'up ' + directionAbs;
            textColour = "text-warning"
            image = '/doomometer-logo2.png';
        } else {
            directionText = 'down ' + directionAbs;
            image = '/earth.png';
            textColour = "text-success"
        }

        let count = this.props.count | 0;

        return (

            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        {image ? <Image src={image} width={"50"} height={"50"} alt={"Change indicator"}/> :
                            <div/>}        </div>
                    <div className="stat-title">{this.props.name}</div>
                    <div className={`stat-value ${textColour}`}>{count}</div>
                    <div className="stat-desc"> {directionText} {this.props.message} {this.props.duration}</div>
                </div>
            </div>

        )
    }
}