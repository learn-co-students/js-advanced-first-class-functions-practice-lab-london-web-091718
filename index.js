// Code your solution in this file!
function logDriverNames(driverArray) {
  driverArray.filter(driver => console.log(driver.name))
}

function logDriversByHometown(driver, location) {
  array = driver.filter(driver => driver.hometown === location)
  return array.map(driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
 return drivers.slice(0).sort((a, b) => a.revenue - b.revenue)
};


function driversByName(drivers) {
  return drivers.slice(0).sort((d1, d2) => d1.name.localeCompare(d2.name));
};

function totalRevenue (drivers) {
  return drivers.reduce((total, currentDriver) => {
    return currentDriver.revenue + total;
  }, 0);
};

function averageRevenue(drivers) {
  let averageRevenueoFDrivers = (totalRevenue(drivers)/(drivers.length));
  return averageRevenueoFDrivers
}
