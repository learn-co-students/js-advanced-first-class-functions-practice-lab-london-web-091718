// Code your solution in this file!


const logDriverNames = (driver) => driver.forEach(element => {
  console.log(element.name)
});


const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = (driver) => driver.slice().sort((a, b) => a.revenue - b.revenue)


const driversByName = (driver) => driver.slice().sort((a, b) =>  a.name.localeCompare(b.name))


const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

  const averageRevenue = function (drivers) {
      return totalRevenue(drivers) / drivers.length
  }