// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  logDriverNames(drivers.filter(driver => driver.hometown === location));
}

function driversByRevenue(drivers) {
  return [...drivers].sort((d1, d2) => d1.revenue - d2.revenue);
}

function driversByName(drivers) {
  return [...drivers].sort((d1, d2) => d1.name.localeCompare(d2.name));
}

function totalRevenue(drivers) {
  return drivers.reduce((total, currentDriver) => currentDriver.revenue + total, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}