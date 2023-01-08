import { fromEvent, interval } from "rxjs";
import {
    // debounceTime,
    // distinctUntilChanged,
    // pluck,
    // debounce,
    sample,
    sampleTime,
    map,
    auditTime,
} from "rxjs/operators";

// const inputBox = document.querySelector("#text-input");
//
// const input$ = fromEvent(inputBox, "keyup");

// input$
//     .pipe(
//         debounce(() => interval(1000)),
//         pluck("target", "value"),
//         distinctUntilChanged()
//     )
//     .subscribe(console.log);

const click$ = fromEvent(document, "click");
const timer$ = interval(1000);

// click$
//     .pipe(
//         sampleTime(4000),
//         map(({ clientX, clientY }) => {
//             clientX,
//             clientY;
//         })
//     )
//     .subscribe(console.log);

// timer$.pipe(sample(click$)).subscribe(console.log);

click$.pipe(auditTime(4000)).subscribe(console.log);