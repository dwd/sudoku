import "./square.css";

interface SquareSetProps {
    val: number | null;
    onEnter: () => void;
    highlight: boolean;
}

export const SquareSetDisplay = ({
        val,
        onEnter,
        highlight,
}: SquareSetProps) => {
    const className = highlight ? 'square highlight' : 'square'
    return <div className={className} onMouseEnter={onEnter}><span>{ val }</span></div>;
};