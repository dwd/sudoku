import { Grid, Number1to9 } from "@dwd/sudoku-lib";
import {SquareDisplay} from "./SquareDisplay.tsx";
import "./grid.css";
import {useState} from "react";

export const GridDisplay = () => {
    const [grid, setGrid] = useState<Grid>(new Grid());
    const [trigger, setTrigger] = useState<number>(0);
    const click = (x: number, y: number) => {
        return (num: number) => {
            grid.setUser(x, y, num as Number1to9);
            console.log(`Clicked on ${num} in square ${x},${y}`);
            setGrid(grid);
            setTrigger(trigger + 1);
        };
    };
    return <table className={"grid"}><tbody>
        {
            grid.array.map((row, x) => {
                return <tr key={x + trigger}>
                    {
                        row.map((sq, y) => {
                            const position = `grid grid-pos-${x % 8 === 0 ? 'x' : x % 3}-${y % 8 === 0 ? 'y' : y % 3}`
                            return <td className={position} key={`${x}-${y}-${trigger}`}><SquareDisplay val={sq.value()} allowed={sq.allowed} onClick={click(x, y)} /></td>;
                        })
                    }
                </tr>;
            })
        }
    </tbody></table>;
}