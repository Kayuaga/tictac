export interface MainBoardStateI {
    board: Array<Array<string>>;
    turn: string;
    isBoardVisible: boolean;
    isMainElemetnsActive: boolean;
    showHide: string;
    rawSize: number;
    rawLength: number;
}