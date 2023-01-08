import { of, fromEvent } from "rxjs";
import { take, map, first } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
const click$ = fromEvent(document, "click");

click$
    .pipe(
        map((event) => ({
            x: event.clientX,
            y: event.clientY,
        })),
        //first, take(1)
        first(({ y }) => y > 200)
    )
    .subscribe({
        next: console.log,
        complete: () => console.log("complete!!!"),
    });