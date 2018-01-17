export interface BoardPropsInterface {
    board: Array<Array<string>>;
    turn: string;

    updateBoard: (rawIndex: number, valueIndex: number, value: string) => void;
    resetBoard: () => void;
}
