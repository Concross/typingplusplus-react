import { Component } from 'react';

export default class SetLevel extends Component {
    componentDidMount() {
        const { currScore } = this.props;

        switch (currScore) {
            case currScore < 300:
            default:
                this.props.setLevel(1);
                return;
        }
    }

    componentDidUpdate() {
        const { currScore } = this.props;

        switch (currScore) {
            case currScore < 300:
            default:
                this.props.setLevel(1);
                return;
        }
    }

    render() {
        return null;
    }
}
