// import { of } from "rxjs";
// import { startWith, endWith } from "rxjs/operators";
//
// const numbers$ = of(1, 2, 3, 4, 5);
//
// numbers$.pipe(startWith("a"), endWith("z")).subscribe(console.log);

// import { interval, empty } from "rxjs";
// import { take, concat, delay, startWith } from "rxjs/operators";
//
// const interval$ = interval(1000);
// const delayed$ = empty().pipe(delay(1000));
//
// delayed$
//     .pipe(
//         concat(
//             delayed$.pipe(startWith("3...")),
//             delayed$.pipe(startWith("2...")),
//             delayed$.pipe(startWith("1...")),
//             delayed$.pipe(startWith("GO!..."))
//         ),
//         startWith("Get ready!...")
//     )
//     .subscribe(console.log);

// import { fromEvent, merge } from "rxjs";
//
// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");
//
// merge(keyup$, click$).subscribe(console.log);

// import { combineLatest, fromEvent, merge } from "rxjs";
//
// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");
//
// combineLatest(keyup$, click$).subscribe(console.log);

//forkJoin

import { forkJoin, of } from "rxjs";
import { take } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4);
const letters$ = of("a", "b", "c", "d");

forkJoin(numbers$.pipe(take(1)), letters$.pipe(take(1))).subscribe(console.log);