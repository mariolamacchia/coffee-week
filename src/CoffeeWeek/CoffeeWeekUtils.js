import { List } from 'immutable';

// Return a list of lists of employees for each location
function splitEmployeesByLocation(employees) {
  const locations = employees.reduce((locations, employee) => ({
    ...locations,
    [employee.location]: (locations[employee.location] || List()).push(employee),
  }), {});
  return Object.keys(locations).map(location => locations[location]);
}

// Shuffle a list of employees and creates pairs of giver - receiver
function getPairs(employees) {
  const shuffledList = employees.sortBy(Math.random);
  return shuffledList.map((employee, index) => [
    employee,
    shuffledList.get((index + 1) % shuffledList.size),
  ]);
}

// Split employees by location and returns pairs of giver - receiver
export function getPairsByLocation(employees) {
  const employeesByLocation = splitEmployeesByLocation(employees);
  return employeesByLocation
    .map(getPairs)
    .reduce((mergedArray, pairs) => (mergedArray.concat(pairs)), List())
    .sortBy(([employee]) => employee.name.first);
}
