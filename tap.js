import { of } from "rxjs";
import { map, tap } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
    .pipe(
        tap((val) => console.log("before", val)),
        map((val) => val * 10),
        tap({
            next: (val) => console.log("after", val),
            complete: () => console.log("complete!"),
        })
    )
    .subscribe((val) => console.log("from subscr", val));