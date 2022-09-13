// Import stylesheets
import Hover from './hover.js';
import './style.css';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//fromEvent(document, 'click').subscribe((_) => console.log('x'));

const actions = {
  loading: (state) => {
    return initialState;
  },

  click: (state, text) => {
    console.log(JSON.stringify(state));
    return {
      value: state.value + 1,
      log: state.log.concat(' ' + text),
    };
  },

  // go back to defaults
  reset: () => initialState,
};

const initialState = { value: 0, log: '' };

const clickCounter = new Hover(actions, initialState);

// listen to changes to the state
const unsubscribe = clickCounter((clickState) => {
  console.log(JSON.stringify(clickState));
});

clickCounter.click('first');
clickCounter.click('second');
clickCounter.click('third');

// reset back to zero
clickCounter.reset();

//unsubscribe();

//clickCounter.click("This won't show up");

fromEvent(dropDownBusinessSegment, 'change')
  .pipe(throttleTime(3000))
  .subscribe((_) => clickCounter.loading());
