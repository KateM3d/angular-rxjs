// import { Observable, fromEvent, Subscriber } from "rxjs";
// import { map } from "rxjs/operators";
//
// const observer = {
//     next: (value) => console.log("next", value),
//     error: (error) => console.log("error", error),
//     complete: () => console.log("complete!"),
// };
//
// const observable = new Observable((subscriber) => {
//     // when and what values the observable will send to its subscriber -pushed base approach
//     // subscriber.next("hello");
//     // subscriber.next("world");
//     // subscriber.complete();
//
//     let count = 0;
//
//     const id = setInterval(() => {
//         subscriber.next(count);
//         // subscriber.complete();
//         count++;
//     }, 1000);
//     return () => {
//         console.log("called!");
//         clearInterval(id);
//     };
// });
// const subscription = observable.subscribe(observer);
// const subscriptionTwo = observable.subscribe(observer);
//
// subscription.add(subscriptionTwo);
//
// setTimeout(() => {
//     subscription.unsubscribe();
//     // subscriptionTwo.unsubscribe();
// }, 3500);

// import { fromEvent } from "rxjs";
// import { of } from "rxjs";
// import { range } from "rxjs";
// import { from } from "rxjs";
//
// function* hello() {
//     yield "Hello";
//     yield "You!";
// }

// const iterator = hello();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// const observer = {
//     next: (val) => console.log("next", val),
//     error: (err) => console.log("error", err),
//     complete: () => console.log("complete!"),
// };

// const source$ = fromEvent(document, "click");
//
// const sub1 = source$.subscribe(observer);
// const sub2 = source$.subscribe(observer);
//
// setTimeout(() => {
//     console.log("unsubscribing 1");
//     sub1.unsubscribe();
// }, 3000);
//
// setTimeout(() => {
//     console.log("unsubscribing 2");
//     sub2.unsubscribe();
// }, 9000);

// const source$ = of(1, 2, 3, 4, 5);
// const source$ = range(4, 15);
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from("hello");
// const source$ = from(fetch("https://api.github.com/users/octocat"));
// const source$ = from(iterator);
//
// source$.subscribe(observer);

//

// import { fromEvent, of } from "rxjs";
// import { map, pluck, mapTo } from "rxjs/operators";
//
// // of(1, 2, 3, 4, 5).subscribe(console.log);
//
// // of(1, 2, 3, 4, 5)
// //     .pipe(map((val) => val * 10))
// //     .subscribe(console.log);
//
// const keyup$ = fromEvent(document, "keyup");
// const keycode$ = keyup$.pipe(map((event) => event.code));
//
// const keycodeWithPluck$ = keyup$.pipe(pluck("code"));
//
// const pressed$ = keyup$.pipe(mapTo("Key Pressed!"));
//
// pressed$.subscribe(console.log);

import { fromEvent, of } from "rxjs";
import { filter, map } from "rxjs/operators";

// of(1, 2, 3, 4, 5)
//     .pipe(filter((val) => val > 2))
//     .subscribe(console.log);

const keyup$ = fromEvent(document, "keyup");
const keycode$ = keyup$.pipe(map((event) => event.code));
const enter$ = keycode$.pipe(filter((code) => code === "Enter"));
//
// const keycodeWithPluck$ = keyup$.pipe(pluck("code"));
//
// const pressed$ = keyup$.pipe(mapTo("Key Pressed!"));
//
keycode$.subscribe(console.log);
enter$.subscribe(console.log);