import { from, interval } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4];

const totalReducer = (acc, current) => {
    return acc + current;
};

interval(1000)
    .pipe(take(3), reduce(totalReducer, 0))
    .subscribe({
        next: console.log,
        complete: () => console.log("complete!"),
    });