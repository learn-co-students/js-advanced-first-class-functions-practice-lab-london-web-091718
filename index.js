// Code your solution in this file!
const logDriverNames = (driver) => driver.forEach(el => console.log(el.name))

const logDriversByHometown = (driver, input) => driver.forEach(function (el) {
  if (el.hometown === input) {
    console.log(el.name)
  }
})

const driversByRevenue = (driver) => [...driver].sort((a, b) => a.revenue - b.revenue)

const driversByName = (driver) => [...driver].sort((a, b) => a.name.localeCompare(b.name))

const totalRevenue = (driver) => driver.reduce((accumulator, currentValue) => accumulator + currentValue.revenue, 0)

const averageRevenue = (driver) => totalRevenue(driver) / driver.length

