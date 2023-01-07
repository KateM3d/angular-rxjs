import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4];
const user = [
    { name: "Brian", loggedIn: false, token: null },
    { name: "Kate", loggedIn: true, token: "abc" },
    { name: "Leo", loggedIn: true, token: "123" },
];

const state$ = from(user).pipe(
    scan((acc, current) => {
        return {...acc, ...current };
    }, {})
);

const name$ = state$.pipe(map((state) => state.name));

name$.subscribe(console.log);