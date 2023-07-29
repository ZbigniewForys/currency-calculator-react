import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const Clock = () => {
  const dateTime = useCurrentDate();

  const formatDate = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formatTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <StyledClock>
      Dzisiaj jest: {dateTime.toLocaleString("default", formatDate)}
      {", "}
      godz.{dateTime.toLocaleString("default", formatTime)}
    </StyledClock>
  );
};
export default Clock;
