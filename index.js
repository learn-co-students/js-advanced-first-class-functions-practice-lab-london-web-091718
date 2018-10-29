// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers,town){
  drivers.forEach(function(driver){
    if (driver.hometown == town){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drovers){
  let drivers = [...drovers]
  return drivers.sort(function(a,b){
    return a.revenue - b.revenue
})
}

function driversByName(drovers){
  let drivers = [...drovers]
  let result = drivers.sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
  return result
}

function totalRevenue(drovers){
  sum=0
  drovers.forEach(function(driver){
    sum = sum + driver.revenue
  })
  return sum
}

function averageRevenue(drivers){
  sum=0
  i=0
  drivers.forEach(function(driver){
    i++
    sum+=driver.revenue
  })
  return sum/i
}
