// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(el) {
    console.log(el.name)
  });
}

const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach(function(el) {
    if (el.hometown === hometown) {
      console.log(el.name)
    }
  })
}

const driversByRevenue = (drivers) => {
  driverArray = []
  for (var i of drivers) {
    driverArray.push(i);
  }
  return driverArray.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = (drivers) => {
  driverArray = []
  for (var i of drivers) {
    driverArray.push(i);
  }
  return driverArray.sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}

const totalRevenue = (drivers) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  revenue = []
  for (var i of drivers) {
    revenue.push(i.revenue)
  }
  return revenue.reduce(reducer)
}

const averageRevenue = (drivers) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  revenue = []
  driversNum = 0
  for (var i of drivers) {
    revenue.push(i.revenue)
    driversNum ++
  }
  return (revenue.reduce(reducer) / driversNum)
}
