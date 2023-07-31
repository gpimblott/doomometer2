import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

export class EarthquakeButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Earthquakes" duration={data.days + " days"} direction={data.direction}
                      message="in the last"></BaseCard>
        )
    }
}