import { Scheduler } from "@soluto-private/mx-asurion-ui-react";
import { useState, useEffect } from "react";
import { data } from "./mockData";

const StoryScheduler = () => {
  const dates = Object.values(data);

  const getDateSuffix = (date: number) => {
    const dateEnd = date % 10;

    switch (dateEnd) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const [selectedDate, setSelectedDate] = useState(dates[0].value);
  const [selectedTime, setSelectedTime] = useState("");

  const { weekday, month, date, times } =
    data[selectedDate as keyof typeof data];

  useEffect(() => {
    setSelectedTime("");
  }, [selectedDate]);

  return (
    <Scheduler>
      <Scheduler.Heading>Choose a Date</Scheduler.Heading>
      <Scheduler.Carousel>
        {dates.map((day, i) => {
          return (
            <Scheduler.DateCard
              key={i}
              weekday={day.weekday}
              date={day.date}
              month={day.month}
              value={day.value}
              checked={selectedDate === day.value}
              onChange={(e) => setSelectedDate(e.target.value)}
              tag={i === 0 ? "Today" : ""}
            />
          );
        })}
      </Scheduler.Carousel>
      <Scheduler.Heading>
        {"Select a Date on "}
        <strong>{`${weekday}, ${month} ${date}`}</strong>
      </Scheduler.Heading>
      {times.length > 0 ? (
        <Scheduler.TimeContainer>
          {times.map((time: { start: string; end: string }, i: number) => (
            <Scheduler.TimeSlot
              key={i}
              time={`${time.start} - ${time.end}`}
              value={time.start}
              onChange={(e) => setSelectedTime(e.target.value)}
              checked={selectedTime === time.start}
            />
          ))}
        </Scheduler.TimeContainer>
      ) : (
        <Scheduler.NoTimesAvailable>
          <Scheduler.NoTimesAvailableHeading>
            We are all booked on {weekday}, {month} {date}
            {getDateSuffix(date)}
          </Scheduler.NoTimesAvailableHeading>
          <Scheduler.NoTimesAvailableSubheading>
            The next available date is <strong>Wednesday, March 22</strong> at{" "}
            <strong>8am</strong>
          </Scheduler.NoTimesAvailableSubheading>
        </Scheduler.NoTimesAvailable>
      )}
    </Scheduler>
  );
};

export default StoryScheduler;
