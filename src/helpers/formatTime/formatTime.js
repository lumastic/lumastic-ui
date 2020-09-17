import moment from "moment";

/**
 * Implements Moment.js for formatting dates
 * https://momentjs.com/docs/#/displaying/fromnow/
 *
 * @param {{time:Date}} param0 input parameters
 */
const formatTime = ({
  time = "",
  fullDate = false,
  withTime = false,
  ago = true
}) => {
  if (fullDate) {
    let format = "LL";
    if (withTime) {
      format += "L";
    }
    return moment(time).format(format);
  }
  return moment(time).fromNow(!ago);
};

export default formatTime;
