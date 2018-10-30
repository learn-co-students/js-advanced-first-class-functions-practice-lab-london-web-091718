// Code your solution in this file!

const logDriverNames = list => list.forEach(driver => console.log(driver.name));

const logDriversByHometown = (list, location) => list.filter(driver => driver.hometown === location).forEach(driver => console.log(driver.name));

function driversByRevenue (list) {
  const arr = [...list]
  arr.sort(function (a,b){
  return a.revenue - b.revenue;
});
  return arr;
}

function driversByName (list) {
  const arr = [...list]
  arr.sort(function (a,b){
    let namea = a.name.toUpperCase();
    let nameb = b.name.toUpperCase();
    if (namea > nameb){
      return 1;
    }else if (namea < nameb){
      return -1;
    } else {
      return 0;
    }
});
return arr;
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
