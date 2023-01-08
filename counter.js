import { interval } from "rxjs";
import { scan, mapTo, takeWhile, tap } from "rxjs/operators";

const counter$ = interval(1000);

const countdown = document.querySelector("#countdown");
const message = document.querySelector("#message");

counter$
    .pipe(
        mapTo(-1),
        scan((acc, current) => {
            return acc + current;
        }, 10),
        tap(console.log),
        takeWhile((val) => val >= 0)
    )
    .subscribe((val) => {
        countdown.innerHTML = val;
        if (!val) {
            message.innerHTML = "you hit 0";
        }
    });