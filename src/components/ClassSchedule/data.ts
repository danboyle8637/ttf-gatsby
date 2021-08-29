export const daysOfTheWeek = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"],
];

export type ClassLocation = "studio" | "online";

type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface ClassTime {
  id: number;
  time: string;
  location: ClassLocation;
}

interface DaySchedule {
  dayOfWeek: DayOfWeek;
  classTimes: ClassTime[];
}

export const classTimes: DaySchedule[] = [
  {
    dayOfWeek: 0,
    classTimes: [],
  },
  {
    dayOfWeek: 1,
    classTimes: [
      { id: 0, time: "6:00am - 7:00am", location: "studio" },
      { id: 1, time: "9:00am - 10:00am", location: "studio" },
      { id: 2, time: "10:00am - 11:00am", location: "online" },
      { id: 3, time: "4:00pm - 5:00pm", location: "online" },
      { id: 4, time: "5:00pm - 6:00pm", location: "studio" },
    ],
  },
  {
    dayOfWeek: 2,
    classTimes: [
      { id: 0, time: "6:00am - 7:00am", location: "studio" },
      { id: 1, time: "9:00am - 10:00am", location: "studio" },
      { id: 2, time: "10:00am - 11:00am", location: "online" },
      { id: 3, time: "4:30pm - 5:30pm", location: "studio" },
      { id: 4, time: "5:30pm - 6:30pm", location: "online" },
    ],
  },
  {
    dayOfWeek: 3,
    classTimes: [
      { id: 0, time: "6:00am - 7:00am", location: "studio" },
      { id: 1, time: "9:00am - 10:00am", location: "studio" },
      { id: 2, time: "10:00am - 11:00am", location: "online" },
      { id: 3, time: "4:00pm - 5:00pm", location: "online" },
      { id: 4, time: "5:00pm - 6:00pm", location: "studio" },
    ],
  },
  {
    dayOfWeek: 4,
    classTimes: [
      { id: 0, time: "6:00am - 7:00am", location: "studio" },
      { id: 1, time: "9:00am - 10:00am", location: "studio" },
      { id: 2, time: "10:00am - 11:00am", location: "online" },
      { id: 3, time: "4:30pm - 5:30pm", location: "studio" },
      { id: 4, time: "5:30pm - 6:30pm", location: "online" },
    ],
  },
  {
    dayOfWeek: 5,
    classTimes: [
      { id: 0, time: "6:00am - 7:00am", location: "studio" },
      { id: 1, time: "9:00am - 10:00am", location: "online" },
      { id: 3, time: "4:00pm - 5:00pm", location: "online" },
    ],
  },
  {
    dayOfWeek: 6,
    classTimes: [{ id: 0, time: "11:00am - 12:00am", location: "online" }],
  },
];
