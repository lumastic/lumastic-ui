const smallMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August"
];

const formatTime = ({
  time = "",
  fullDate = false,
  withTime = false,
  sinceDate,
  ago = false
}) => {
  const toFormat = new Date(Date.parse(time));

  if (fullDate) {
    let returnString = "";
    returnString += `${
      months[toFormat.getMonth()]
    } ${toFormat.getDate()}, ${toFormat.getFullYear()}`;
    if (withTime) {
      returnString += ` ${toFormat.getHours()}:${toFormat.getMinutes()}`;
    }
    return returnString;
  }
  const today = sinceDate || new Date();
  const timeSince = today.getTime() - toFormat.getTime();
  // Not the same year
  if (toFormat.getFullYear !== today.getFullYear)
    return `${
      smallMonths[toFormat.getMonth()]
    } ${toFormat.getDate()}, ${toFormat.getFullYear()}`;
  // Greater than 1 day ago (24hr * 60m * 60s * 1000ms)
  if (timeSince >= 24 * 60 * 60 * 1000)
    return `${smallMonths[toFormat.getMonth()]} ${toFormat.getDate()}`;
  // Greater than 1 hr ago (60m * 60s * 1000ms)
  if (timeSince >= 60 * 60 * 1000)
    return `${Math.floor(timeSince / (60 * 60 * 1000))}hr`;
  // Greater than 1 m ago (60s * 1000ms)
  if (timeSince >= 60 * 1000) return `${Math.floor(timeSince / (60 * 1000))}m`;
  // Else
  return "just now";
};

export default formatTime;
