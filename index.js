import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

function calculateScrollPercent(element) {
    const { scrollTop, scrollHeight, clientHeight } = element;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
const progressBar = document.querySelector(".progress-bar");

const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(
    map(({ target }) => calculateScrollPercent(target.scrollingElement))
);

progress$.subscribe((percent) => {
    progressBar.style.width = `${percent}%`;
});