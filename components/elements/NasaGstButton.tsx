import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

export class NasaGstButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Geomagnetic storms" duration={data.days}
                      message="In the last"></BaseCard>
        )
    }
}