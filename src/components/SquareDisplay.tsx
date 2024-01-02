import "./square.css";
import {KeyboardEventHandler, useCallback, useRef} from "react";

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
    const className = highlight ? 'square highlight' : 'square'
    return val === null ?
        <table className={'square'} tabIndex={tabIndex} onKeyDown={pusher()} onMouseEnter={enter} ref={tableRef}>
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
        </table>
        :
        <div className={className} onMouseEnter={onEnter}><span>{ val }</span></div>;
};