import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

export class EpidemicButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Epidemics" duration="" direction={data.direction}
                      message=""></BaseCard>
        )
    }
}