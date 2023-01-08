import { interval, fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

const counter$ = interval(1000);
const click$ = fromEvent(document, "click");

counter$.pipe(takeUntil(click$)).subscribe(console.log);