// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver){
    if (location === driver.hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {

  return drivers.slice().sort(function (a, b) {

  return a.revenue - b.revenue
})
}

const driversByName = function (drivers) {
  return [...drivers].sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
