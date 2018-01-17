import * as React from 'react';
import constant from './constant';
import './styles.css';

import { MainBoardStateI } from './model';
import Board from '../../component/board';

export default class BoardContainer extends React.Component<{}, MainBoardStateI> {
    constructor(props: {}) {
        super(props);
        this.state =  {
            board: constant.DEFAULT_BOARD,
            turn: constant.TURN_X,
            isBoardVisible: false,
            isMainElemetnsActive: false,
            showHide: constant.SHOW_BOARD,
            rawSize: 3,
            rawLength: 3,
        };
    }

    generateBoard = () => {
        const {isBoardVisible, showHide, rawSize, rawLength} = this.state;
        const changeStatus = showHide === constant.SHOW_BOARD ? constant.HIDE_BOARD : constant.SHOW_BOARD;
        const newBoard: Array<Array<string>> = Array(Number(rawSize)).fill(0)
            .map(arr => Array(Number(rawLength)).fill(''));

        this.setState(
            {   isBoardVisible: !isBoardVisible,
                showHide: changeStatus,
                board: newBoard,
            });
    }


    updateBoard = (rawIndex: number, valueIndex: number, value: string): void => {
        let {board, turn} = this.state;
        board[rawIndex][valueIndex] = turn === constant.TURN_X ? constant.TURN_X : constant.TURN_O;
        turn = turn === constant.TURN_X ? constant.TURN_O : constant.TURN_X;
        this.setState({board, turn});
    }

    resetBoard = (): void => {
        const {board} = this.state;
        const resetBoard = board.map(raw => raw.map(tile => ' '));

        this.setState({board: resetBoard});
    }

    render() {
        const {board, turn} = this.state;
        return (
            <div className="boardContainer">
                {!this.state.isMainElemetnsActive
                && <button
                    className="button"
                    onClick={() =>
                        setTimeout(() => this.setState({isMainElemetnsActive: true,  isBoardVisible: false}), 1500)}
                >Start Game
                </button>
                }
                {this.state.isMainElemetnsActive &&
                <button
                    className="button stopGame"
                    onClick={() =>
                        setTimeout(() => this.setState({isMainElemetnsActive: false, isBoardVisible: false}), 1500)}
                >
                    Stop game
                </button>
                }
                {!this.state.isBoardVisible && this.state.isMainElemetnsActive &&
                <div>
                    <div>
                        <label className="heightLabel">{constant.FIELD_HEIGHT}</label>
                        <label className="lenghtLabel">{constant.FIELD_LENGTH}</label>
                    </div>
                    <div>
                        <input
                            id="rawSize"
                            type="number"
                            value={this.state.rawSize}
                            onChange={(event) => {
                                this.setState({rawSize: Number(event.target.value)});
                            }}
                        />
                        <input
                            id="rawLength"
                            type="number"
                            value={this.state.rawLength}
                            onChange={(event) => {
                                this.setState({rawLength: Number(event.target.value)});
                            }}
                        />
                    </div>
                </div>
                }
                {this.state.isMainElemetnsActive && <button
                    onClick={this.generateBoard}
                >{this.state.showHide}
                </button>}
                {this.state.isBoardVisible && <Board
                    board={board}
                    turn={turn}
                    updateBoard={this.updateBoard}
                    resetBoard={this.resetBoard}
                />}
            </div>
        );
    }
}

