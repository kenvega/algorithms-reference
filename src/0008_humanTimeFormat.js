// level : 4kyu
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

// Write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// examples:
// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

// consider a year is 365 days and a day is 24 hours

// push to an object the results different than 0
// reduce to get the string
// TODO: this still can be refactored to one
function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  const times = {
    year: 60 * 60 * 24 * 365,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  let totalSeconds = seconds;
  const unitTimesObj = {};
  Object.values(times).forEach((duration, i) => {
    const unitTimeVal = Math.trunc(totalSeconds / duration);
    if (unitTimeVal !== 0) unitTimesObj[Object.keys(times)[i]] = unitTimeVal;
    totalSeconds -= duration * unitTimeVal;
  });
  const unitTimes = Object.keys(unitTimesObj);

  return unitTimes.reduce((acc, cur, i) => {
    let separator = '';
    if (i === unitTimes.length - 2) separator = ' and ';
    if (i < unitTimes.length - 2)separator = ', ';
    return `${acc}${unitTimesObj[unitTimes[i]]} ${cur}${(unitTimesObj[cur] > 1) ? 's' : ''}${separator}`;
  }, '');
}

// an array was not good enough to solve this, thought an object could be better
function formatDurationOld2(seconds) {
  // push to an array the results
  // reduce to get the string
  const MINUTE = 60;
  const HOUR = 60 * 60;
  const DAY = 60 * 60 * 24;
  const WEEK = 60 * 60 * 24 * 7;
  const MONTH = 60 * 60 * 24 * 7 * 30;
  const YEAR = 60 * 60 * 24 * 7 * 30 * 12;

  const durations = [YEAR, MONTH, WEEK, DAY, HOUR, MINUTE];
  const durationNames = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
  const times = [];

  let totalSeconds = seconds;
  durations.forEach(duration => {
    const time = Math.trunc(totalSeconds / duration);
    times.push(time);
    totalSeconds -= duration * time;
  });
  times.push(totalSeconds);
  // console.log('times: ', times);

  // 1 hour, 1 minute and 2 seconds
  const answer = times.reduce((acc, cur, i) => {
    if (cur === 0) return acc;

    let separator = '';
    if (i === times.length - 2 && times[times.length - 1] > 0) separator = ' and ';
    if (i < times.length - 2 && times[times.length - 2] > 0) separator = ', ';

    if (cur === 1) return `${acc}${cur} ${durationNames[i]}${separator}`;
    if (cur > 1) return `${acc}${cur} ${durationNames[i]}s${separator}`;

    return '';
  }, '');

  return answer;
}

// didn't notice the iteration I could make at start
function formatDurationOld(totalSeconds) {
  const MINUTE = 60;
  const HOUR = 60 * 60;
  const DAY = 60 * 60 * 24;
  const WEEK = 60 * 60 * 24 * 7;
  const MONTH = 60 * 60 * 24 * 7 * 30;
  const YEAR = 60 * 60 * 24 * 7 * 30 * 12;
  // get years
  const years = Math.trunc(totalSeconds / YEAR);
  console.log('years: ', years);
  let rest = totalSeconds - YEAR * years;

  // get months
  const months = Math.trunc(rest / MONTH);
  console.log('months: ', months);
  rest -= MONTH * months;

  // get weeks
  const weeks = Math.trunc(rest / WEEK);
  console.log('weeks: ', weeks);
  rest -= WEEK * weeks;

  // get days
  const days = Math.trunc(rest / DAY);
  console.log('days: ', days);
  rest -= DAY * days;

  // get hours
  const hours = Math.trunc(rest / HOUR);
  console.log('hours: ', hours);
  rest -= HOUR * hours;

  // get minutes
  const minutes = Math.trunc(rest / MINUTE);
  console.log('minutes: ', minutes);
  rest -= MINUTE * minutes;

  // get seconds
  const seconds = rest;
  console.log('seconds: ', seconds);

  return `${years > 0 ? years : ''}`;
}

console.log(formatDuration(0)); // now
console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(120)); // 2 minutes
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(31536000)); // 1 year

// one solution from codewars. it could be done in just one iteration
const delegates = [
  { s: 'year', v: 60 * 60 * 24 * 365 },
  { s: 'day', v: 60 * 60 * 24 },
  { s: 'hour', v: 60 * 60 },
  { s: 'minute', v: 60 },
  { s: 'second', v: 1 },
];

function formatDuration2(seconds) {
  if (!seconds) return 'now';

  return delegates.reduce((ret, dg, idx) => {
    const val = Math.floor(seconds / dg.v);
    if (!val) return ret;
    seconds -= dg.v * val;
    const str = val > 1 ? `${dg.s}s` : dg.s;
    const add = !ret ? '' : (seconds > 0 ? ', ' : ' and ');
    return `${ret + add}${val} ${str}`;
  }, '');
}
