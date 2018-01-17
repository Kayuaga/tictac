import * as React from 'react';
import { BoardPropsInterface } from './model';
import Tile from '../tile';
import './styles.css';
import constant from './constant';

export default (props: BoardPropsInterface) => {
    return (
        <div
            className="boardContainer"
        >
            <div className="tileField">
                <button
                    onClick={props.resetBoard}
                >{constant.RESET_BOARD}
                </button>
            {...props.board.map((list, rawIndex) =>

                <div key={rawIndex} className="board" >{...list.map((value, valueIndex) => <Tile
                    key={valueIndex}
                    value={value}
                    turn={props.turn}
                    loc={({rawIndex, valueIndex})}
                    updateBoard={props.updateBoard}
                />)}
                </div>
            )}
            </div>

        </div>
    );
};
