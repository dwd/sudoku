import "./square.css";
import {KeyboardEventHandler, useCallback, useRef} from "react";

interface SquareChoiceProps {
    allowed: number[];
    onClick: (n: number) => void;
    tabIndex: number;
}

export const SquareChoice = ({
        allowed,
        onClick,
        tabIndex,
}: SquareChoiceProps) => {
    const tableRef = useRef<HTMLTableElement>(null);
    const clicker = (num: number) => {
        return () => {
            onClick(num);
        }
    };
    const pusher = () : KeyboardEventHandler<HTMLTableElement> => {
        return (ev) => {
            console.log(`Keypress: ${ev.key}`);
            const n = Number(ev.key);
            if (!isNaN(n) && n !== 0) {
                onClick(n);
            }
            ev.stopPropagation();
        }
    }
    const enter = useCallback(() => {
        if (tableRef.current === null) return;
        tableRef.current.focus();
    }, [tableRef]);
    return <table className={'square'} tabIndex={tabIndex} onKeyDown={pusher()} onMouseEnter={enter} ref={tableRef}>
            <tbody>
            {
                [0,3,6].map(r => {
                    return <tr key={r}>
                        {[0,1,2].map(c => {
                            return <td key={r+c}>
                                {
                                    allowed.find(v => v === r + c + 1) !== undefined ?
                                        <button onClick={clicker(r + c + 1)} tabIndex={-1}>
                                            {r + c + 1}
                                        </button>
                                        :
                                        <div className={'spacer'}> </div>
                                }
                            </td>;
                        })
                        }
                    </tr>
                })
            }
            </tbody>
        </table>;
};