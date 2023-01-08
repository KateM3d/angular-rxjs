import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const interval$ = interval(1000);
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => interval$.pipe(take(3)))).subscribe(console.log);