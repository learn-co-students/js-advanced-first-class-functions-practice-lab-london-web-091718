// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(d => console.log(d.name))
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(d => { if (d.hometown === hometown) console.log(d.name)})
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total }, 0)
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
