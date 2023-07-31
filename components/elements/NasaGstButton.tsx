import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

export class NasaGstButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Geomagnetic storms" duration={(data.days | 0) + " days"} direction={data.direction}
                      message="in the last"></BaseCard>
        )
    }
}