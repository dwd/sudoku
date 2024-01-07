import "./square.css";
import {SquareChoice} from "./SquareChoice.tsx";
import {SquareSetDisplay} from "./SquareSetDisplay.tsx";

interface SquareProps {
    val: number | null;
    allowed: number[];
    onClick: (n: number) => void;
    onEnter: () => void;
    highlight: boolean;
    tabIndex: number;
}

export const SquareDisplay = ({
        val,
        allowed,
        onClick,
        onEnter,
        highlight,
        tabIndex,
}: SquareProps) => {
    return val === null ?
        <SquareChoice allowed={allowed} onClick={onClick} tabIndex={tabIndex}/>
        :
        <SquareSetDisplay val={val} onEnter={onEnter} highlight={highlight}/>;
};