const userInput = prompt("Please input your date follow this rule dd/m/YYYY:");

const dateArr = userInput.split("/");

const date = Number(dateArr[0]);
const month = Number(dateArr[1]);
const year = Number(dateArr[2]);

let result =
  Number.isInteger(date) && Number.isInteger(month) && Number.isInteger(year);
let nextDay = "";
let nextMonth = "";
let nextYear = "";

if (result) {
  if (month < 0 || month > 12) {
    result = false;
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (date < 0 || date > 31) {
          result = false;
        } else {
          result = true;
          if (date === 31 && month === 12) {
            nextDay = 1;
            nextMonth = 1;
            nextYear = year + 1;
          } else if (date === 31) {
            nextDay = 1;
            nextMonth = month + 1;
            nextYear = year;
          } else {
            nextDay = date + 1;
            nextMonth = month;
            nextYear = year;
          }
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (date < 0 || date > 30) {
          result = false;
        } else {
          result = true;
          if (date === 30) {
            nextDay = 1;
            nextMonth = month + 1;
            nextYear = year;
          } else {
            nextDay = date + 1;
            nextMonth = month;
            nextYear = year;
          }
        }
        break;
      case 2:
        let isLeap = new Date(year, 1, 29).getMonth() == 1;
        if (isLeap) {
          if (date < 0 || date > 29) {
            result = false;
          } else {
            result = true;
            if (date === 29) {
              nextDay = 1;
              nextMonth = month + 1;
              nextYear = year;
            } else {
              nextDay = date + 1;
              nextMonth = month;
              nextYear = year;
            }
          }
        } else {
          if (date < 0 || date > 28) {
            result = false;
          } else {
            result = true;
            if (date === 28) {
              nextDay = 1;
              nextMonth = month + 1;
              nextYear = year;
            } else {
              nextDay = date + 1;
              nextMonth = month;
              nextYear = year;
            }
          }
        }
        break;
      default:
        result = false;
        break;
    }
  }
  if (result) {
    console.log("Ngày hợp lệ");
    console.log(`Ngày tiếp theo là ${nextDay}/${nextMonth}/${nextYear}`);
  } else {
    console.log("Ngày không hợp lệ");
  }
} else {
  console.log("Ngày không hợp lệ");
}
