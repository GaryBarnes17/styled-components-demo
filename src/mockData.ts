export const times = [
  {
    start: "8am",
    end: "9am",
  },
  {
    start: "9am",
    end: "10am",
  },
  {
    start: "10am",
    end: "11am",
  },
  {
    start: "11am",
    end: "12pm",
  },
  {
    start: "12pm",
    end: "1pm",
  },
  {
    start: "1pm",
    end: "2pm",
  },
  {
    start: "2pm",
    end: "3pm",
  },
  {
    start: "3pm",
    end: "4pm",
  },
  {
    start: "4pm",
    end: "5pm",
  },
  {
    start: "5pm",
    end: "6pm",
  },
  {
    start: "6pm",
    end: "7pm",
  },
  {
    start: "7pm",
    end: "8pm",
  },
];

export const data: Record<
  string,
  {
    value: string;
    weekday: string;
    date: number;
    month: string;
    times: typeof times;
  }
> = {
  "03202023": {
    value: "03202023",
    weekday: "Monday",
    date: 20,
    month: "March",
    times: times,
  },
  "03212023": {
    value: "03212023",
    weekday: "Tuesday",
    date: 21,
    month: "March",
    times: [],
  },
  "03222023": {
    value: "03222023",
    weekday: "Wednesday",
    date: 22,
    month: "March",
    times: times,
  },
  "03232023": {
    value: "03232023",
    weekday: "Thursday",
    date: 23,
    month: "March",
    times: times,
  },
  "03242023": {
    value: "03242023",
    weekday: "Friday",
    date: 24,
    month: "March",
    times: times,
  },
  "03252023": {
    value: "03252023",
    weekday: "Saturday",
    date: 25,
    month: "March",
    times: times,
  },
  "03262023": {
    value: "03262023",
    weekday: "Sunday",
    date: 26,
    month: "March",
    times: [],
  },
  "03272023": {
    value: "03272023",
    weekday: "Mon",
    date: 27,
    month: "March",
    times: times,
  },
  "03282023": {
    value: "03282023",
    weekday: "Tuesday",
    date: 28,
    month: "March",
    times: times,
  },
  "03292023": {
    value: "03292023",
    weekday: "Wednesday",
    date: 29,
    month: "March",
    times: times,
  },
  "03302023": {
    value: "03302023",
    weekday: "Thursday",
    date: 30,
    month: "March",
    times: times,
  },
  "03312023": {
    value: "03312023",
    weekday: "Friday",
    date: 31,
    month: "March",
    times: times,
  },
  "04012023": {
    value: "04012023",
    weekday: "Saturday",
    date: 1,
    month: "April",
    times: times,
  },
  "04022023": {
    value: "04022023",
    weekday: "Sunday",
    date: 2,
    month: "April",
    times: [],
  },
};
