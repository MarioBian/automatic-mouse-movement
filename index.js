const robot = require("robotjs");

setInterval(() => {
  const { x, y } = robot.getMousePos();
  robot.moveMouse(x + 2, y); // flyttar musen 2px åt höger (1px hade räckt för att hålla skärmen igång)
  setTimeout(() => {
    robot.moveMouse(x, y);
  }, 500); // ser till så musen hamnar på sitt ursprungliga plats och inte svevar iväg
}, 6000); // var 6:e sekund

// startas genom att skriva: node index.js  i terminalen alternativ VS code terminal

// man kan behöva köra npm i robotjs för node packages den behöver
