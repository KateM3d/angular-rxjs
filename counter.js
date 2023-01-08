import { interval, fromEvent } from "rxjs";
import { scan, mapTo, takeWhile, takeUntil } from "rxjs/operators";

const countdown = document.querySelector("#countdown");
const message = document.querySelector("#message");
const btn = document.querySelector("#btn");

const counter$ = interval(1000);
const abortClick$ = fromEvent(btn, "click");

counter$
    .pipe(
        mapTo(-1),
        scan((acc, current) => {
            return acc + current;
        }, 10),
        takeWhile((val) => val >= 0),
        takeUntil(abortClick$)
    )
    .subscribe((val) => {
        countdown.innerHTML = val;
        if (!val) {
            message.innerHTML = "you hit 0";
        }
    });