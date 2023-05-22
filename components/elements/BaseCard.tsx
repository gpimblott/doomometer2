import {Component} from "react";

export class BaseCard extends Component<{
    count: number,
    name: string,
    duration: number|string,
    message: string
}> {
    render() {
        //let {data} = this.props;
        return (
            <div className="p-4 bg-gray-300 rounded-xl text-gray-800">
                <div className="bg-blend-color-dodg text-center">
                    <span className="font-bold text-2xl leading-nonee text-red-600">{this.props.count}</span>
                    <span className={"font-bold text-2xl"}> {this.props.name}</span>
                </div>
                <div className={"text-center"}>
                    <span className="mt-2">{this.props.message} </span><span
                    className={"font-bold text-2xl text-red-600"}>{this.props.duration}</span>
                </div>
            </div>
        )
    }
}