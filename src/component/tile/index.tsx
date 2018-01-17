import * as React from 'react';
import { TileProps } from './model';
import './styles.css';

export default class Tile extends React.Component<TileProps, {}> {
    constructor(props: TileProps) {
        super(props);

    }

    tileClick(props: TileProps): void {
     this.props.updateBoard(props.loc.rawIndex, props.loc.valueIndex, props.value);
    }

    render() {

        return (
            <button
                className={`tile`}
                onClick={() => this.tileClick(this.props)}
            >
                {this.props.value}
            </button>
        );
    }
}