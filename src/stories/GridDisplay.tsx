import { Grid } from "@dwd/sudoku-lib";
import {SquareDisplay} from "./SquareDisplay.tsx";
import "./grid.css";
import {useState} from "react";

export const GridDisplay = () => {
    const [grid, setGrid] = useState<Grid>(new Grid());
    const [trigger, setTrigger] = useState<number>(0);
    const click = (x, y) => {
        return (num) => {
            grid.setUser(x, y, num);
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
                            return <td className={"grid"} key={`${x}-${y}-${trigger}`}><SquareDisplay val={sq.value()} allowed={sq.allowed} onClick={click(x, y)} /></td>;
                        })
                    }
                </tr>;
            })
        }
    </tbody></table>;
}