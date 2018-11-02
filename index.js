// Code your solution in this file!

function logDriverNames (drivers) {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown (drivers, hometown) {
  drivers.map(driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue (drivers) {
  return [...drivers].sort((driverA, driverB) => driverA.revenue - driverB.revenue)
}

function driversByName (drivers) {
  return [...drivers].sort((driverA, driverB) => {
    var nameA = driverA.name.toUpperCase()
    var nameB = driverB.name.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

function totalRevenue (drivers) {
  return drivers.reduce((total, driver) => driver.revenue + total, 0)
}

const averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length
