import { Grid, Number1to9 } from "@dwd/sudoku-lib";
import {SquareDisplay} from "./SquareDisplay.tsx";
import "./grid.css";
import {useState} from "react";

interface GridState {
    grid: Grid
}

export const GridDisplay = () => {
    const [gridstate, setGridState] = useState<GridState>({
        grid: new Grid()
    });
    const grid = gridstate.grid;
    const [highlight, setHighlight] = useState<number|null>(null);
    const click = (x: number, y: number) => {
        return (num: number) => {
            grid.setUser(x, y, num as Number1to9);
            console.log(`Clicked on ${num} in square ${x},${y}`);
            setGridState({grid});
        };
    };
    const enter = (x: number, y: number) => {
        return () => {
            setHighlight(grid.array[x][y].value());
        }
    }
    let tabIndex = 0;
    return <div><table className={"grid"}><tbody>
        {
            grid.array.map((row, x) => {
                return <tr key={x}>
                    {
                        row.map((sq, y) => {
                            const position = `grid grid-pos-${x % 8 === 0 ? 'x' : x % 3}-${y % 8 === 0 ? 'y' : y % 3}`
                            const ti = ++tabIndex;
                            return <td className={position} key={`${x}-${y}`}>
                                <SquareDisplay tabIndex={ti} userSet={sq.userSet} present={sq.present} allowed={sq.allowed} onClick={click(x, y)} highlight={highlight} onEnter={enter(x, y)} />
                            </td>;
                        })
                    }
                </tr>;
            })
        }
    </tbody></table>
        <div className={'grid-solve'}>
        <button onClick={() => {
            grid.popArray();
            setGridState({grid});
        }}>Undo</button>
        <button onClick={() => {
            console.log("Solving...");
            grid.solve();
            console.log("Solved.");
            setGridState({grid});
        }}>Solve!</button>
        </div>
    </div>;
}