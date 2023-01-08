import { fromEvent, interval } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, mergeMap, switchMap } from "rxjs/operators";

// const inputBox = document.querySelector("#text-input");
//
//
// const input$ = fromEvent(inputBox, "keyup");
//
// input$
//     .pipe(
//         debounceTime(1000),
//         mergeMap((event) => {
//             const term = event.target.value;
//             return ajax.getJSON(`https://api.github.com/users/${term}`);
//         })
//     )
//     .subscribe(console.log);

const interval$ = interval(1000);
const click$ = fromEvent(document, "click");

click$.pipe(switchMap(() => interval$)).subscribe(console.log);