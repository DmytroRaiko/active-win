const activeWin = require('active-win');

const cb = async () => {
  const active = await activeWin()
  console.log(active)
}

setInterval(cb, 1000)
