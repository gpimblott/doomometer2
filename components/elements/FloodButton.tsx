import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

export class FloodButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Floods" duration="" direction={data.direction}
                      message=""></BaseCard>
        )
    }
}