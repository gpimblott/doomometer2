import {Component} from "react";

/**
 * Near Earth objects
 */
export class NasaNeoButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <div className="p-4 bg-gray-200 rounded-xl text-gray-800">
                <div className="font-bold text-2xl leading-none">{data}</div>
                <div className="mt-2">Near Earth objects with closest approach in next 7 days</div>
            </div>
        )
    }
}