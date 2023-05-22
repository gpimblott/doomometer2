import {Component} from "react";

export class BaseCard extends Component<{
    count: number,
    name: string,
    duration: number,
    message: string
}> {
    render() {
        //let {data} = this.props;
        return (
            <div className="p-4 bg-gray-200 rounded-xl text-gray-800">
                <div className="bg-blend-color-dodg">
                    <span className="font-bold text-2xl leading-nonee">{this.props.count}</span>
                    <span> {this.props.name}</span>
                </div>
                <div>
                    <span className="mt-2">{this.props.message} </span><span
                    className={"font-bold text-2xl"}>{this.props.duration} days</span>
                </div>
            </div>
        )
    }
}