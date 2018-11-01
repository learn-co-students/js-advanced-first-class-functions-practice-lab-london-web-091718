const logDriverNames = (drivers) => drivers.forEach(driver => console.log(driver.name))

const logDriversByHometown = (drivers, hometown) => drivers.forEach(driver => {
    if (driver.hometown === hometown) {
        console.log(driver.name)
    }
})

const driversByRevenue = (drivers) => [...drivers].sort((driver1, driver2) => driver1.revenue - driver2.revenue)

const driversByName = (drivers) => [...drivers].sort((driver1, driver2) => driver1.name.localeCompare(driver2.name))

const totalRevenue = (drivers) => drivers.reduce((total, currentDriver) => total + currentDriver.revenue, 0)

const averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length



//note: look at solution page for longer equivalents of these methods for reference if you'd liek to see it all slightly more broken down