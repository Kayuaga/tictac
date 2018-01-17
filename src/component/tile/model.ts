export interface TileProps {
    value: string;
    loc: {
        rawIndex: number,
        valueIndex: number,
    };
    turn: string;
    updateBoard: (rawIndex: number, valueIndex: number, value: string) => void;
}