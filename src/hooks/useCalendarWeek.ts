import { useState, useEffect } from "react";

import { getDayOfTheWeek } from "../utils/calendarFunctions";

export const useCalendarWeek = () => {
  const [today, setToday] = useState<number>(0);
  const [activeDay, setActiveDay] = useState<number>(0);

  useEffect(() => {
    const today = getDayOfTheWeek();
    setToday(today);
    setActiveDay(today);
  }, []);

  const handleDayClick = (dayOfWeek: number) => {
    setActiveDay(dayOfWeek);
  };

  return {
    today,
    activeDay,
    handleDayClick,
  };
};
