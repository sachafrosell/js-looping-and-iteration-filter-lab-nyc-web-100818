// Code your solution in this file
function findMatching(driversArr, name){
  return driversArr.filter(function (driverName) {
    return driverName.toUpperCase() == name.toUpperCase();
  });
}

function fuzzyMatch(driversArr, letters){
  return driversArr.filter(function (driverName) {
    return driverName.startsWith(letters);
  });
}

function matchName(driversArr, name){
  return driversArr.filter(function (driver) {
    return driver.name == name;
  });
}
