export const filter = (data, date, age, gender) => {
  let newData = [...data];
  if (date.startDate && date.endDate) {
    newData = newData.filter((item) => {
      const itemDate = new Date(item.day);
      return itemDate <= date.endDate && itemDate >= date.startDate;
    });
  }
  if (age) {
    newData = newData.filter((item) => item.age === age);
  }
  if (gender) {
    newData = newData.filter((item) => item.gender === gender);
  }
  return newData;
};
