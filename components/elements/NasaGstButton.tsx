import {Component} from "react";

export class NasaGstButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <div className="p-4 bg-gray-200 rounded-xl text-gray-800">
                <div className="font-bold text-2xl leading-none">{data.count}</div>
                <div className="mt-2">Geomagnetic storms in the last {data.days} days</div>
            </div>
        )
    }
}