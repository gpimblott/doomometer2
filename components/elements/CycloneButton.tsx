import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

export class CycloneButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Tropical Cyclones" duration="Ongoing" direction={data.direction}
                      message="are "></BaseCard>
        )
    }
}