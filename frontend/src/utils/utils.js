export default class Utils {
  // takes and divides the array
  divideArray(arr, divnum) {
    const result = [];
    for (let i = 0; i < arr.length; i += divnum) {
      const chunk = arr.slice(i, i + divnum);
      result.push(chunk);
    }
    return result;
  }
  divideByYear(data) {
    const result = {};

    data.forEach((item) => {
      const year = item.month.split("/")[2]; // Extract the year from the date

      if (!result[year]) {
        result[year] = [];
      }

      result[year].push(item); // Group by year
    });

    return Object.values(result); // Convert object to 2D array
  }

  convertDateToWords(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [month, day, year] = dateString.split("/").map(Number);

    const monthName = months[month - 1];
    const dayName = day;
    const yearName = year;

    return [monthName, dayName, yearName];
  }
}
