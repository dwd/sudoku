import "./square.css";

interface SquareSetProps {
    val: number | null;
    onEnter: () => void;
    highlight: boolean;
    fromUser: boolean;
}

export const SquareSetDisplay = ({
        val,
        onEnter,
        highlight,
    fromUser,
}: SquareSetProps) => {
    const classes = ['square']
    if (highlight) classes.push('highlight')
    if (!fromUser) classes.push('calculated')
    const className = classes.join(' ')
    return <div className={className} onMouseEnter={onEnter}><span>{ val }</span></div>;
};