import "./square.css";

interface SquareProps {
    val: number | null;
    allowed: number[];
    onClick: (n: number) => void;
}

export const SquareDisplay = ({
        val,
        allowed,
        onClick,
}: SquareProps) => {
    const clicker = (num: number) => {
        return () => {
            onClick(num);
        }
    };
    return val === null ?
        <table className={'square'}>
            <tbody>
            {
                [0,3,6].map(r => {
                    return <tr key={r}>
                        {[0,1,2].map(c => {
                            return <td key={r+c}>
                                {
                                    allowed.find(v => v === r + c + 1) !== undefined ?
                                        <button onClick={clicker(r + c + 1)}>
                                            {r + c + 1}
                                        </button>
                                        :
                                        ' '
                                }
                            </td>;
                        })
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
        :
        <div className={'square'}><span>{ val }</span></div>;
};