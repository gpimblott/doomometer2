import {Component} from "react";
import {BaseCard} from "doom/components/elements/BaseCard";

/**
 * Near Earth objects
 */
export class NasaNeoButton extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        return (
            <BaseCard count={data.count} name="Near Earth Objects" duration={data.days + " days"}
                      direction={data.direction}
                      message="With closet approach in the next"></BaseCard>
        )
    }
}