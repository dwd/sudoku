import "./square.css";
import {SquareChoice} from "./SquareChoice.tsx";
import {SquareSetDisplay} from "./SquareSetDisplay.tsx";

interface SquareProps {
    userSet: number | null;
    present: number | null;
    allowed: number[];
    onClick: (n: number) => void;
    onEnter: () => void;
    highlight: number | null;
    tabIndex: number;
}

export const SquareDisplay = ({
        userSet,
        present,
        allowed,
        onClick,
        onEnter,
        highlight,
        tabIndex,
}: SquareProps) => {
    const val = userSet !== null ? userSet : present;
    const highlightSet = highlight === val;
    return val === null ?
        <SquareChoice allowed={allowed} onClick={onClick} tabIndex={tabIndex}/>
        :
        <SquareSetDisplay val={val} onEnter={onEnter} highlight={highlightSet} fromUser={userSet !== null}/>;
};