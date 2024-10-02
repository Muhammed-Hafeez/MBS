class Utils {
  convertDateString(dateString) {
    const date = new Date(dateString);

    // Get the month (1-12) and day (1-31) from the date
    const month = date.getMonth() + 1; // Months are 0-based
    const day = date.getDate();
    const year = date.getFullYear();

    // Format to M/DD/YYYY
    return `${month}/${String(day).padStart(2, "0")}/${year}`;
  }
  ifSameMonth(date,currentDate) {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month === currentDate.getMonth() && year === currentDate.getFullYear())
      return true;
    return false;
  }
}
module.exports = Utils;
