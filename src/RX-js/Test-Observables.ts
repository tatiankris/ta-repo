import {timer, range} from "rxjs";

// const source = timer(4000, 600)
// source.subscribe((x) => console.log(x))

//выдает значения от 1-го аргумента в количестве, указанном во 2-м аргументе
const rangeSource = range(333, 4);
rangeSource.subscribe((val) => console.log(val));


