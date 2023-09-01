const express = require('express');
const cors = require('cors');
const app = express();
const robot = require('robotjs');
const activeWindow = require('active-win');
const port = 8045;
const path = require('path');

app.use(cors());

app.use(express.static('react-client/build'));


app.get('/execute/:action', (req, res) => {
  const key = req.params.action;
  const activewin = activeWindow.sync();

  if (activewin && activewin.title === 'Age of Empires II: Definitive Edition') {

    console.log(`Executing action: ${key}`);
    switch (key) {

      case 'create-villager':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("h");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyTap("q");
        robot.mouseClick('left');

        break;

      case 'research-wheelbarrow':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("h");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyTap("s");
        robot.mouseClick('left');

        break;


      case 'create-villager-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("h");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyToggle("shift", "down");
        robot.keyTap("q");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'idle-villagers':

        // robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap(".");
        robot.keyToggle("shift", "up");
        // robot.keyToggle("control", "up");

        break;

      case 'town-center-gather':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("h");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');

        break;

      case 'gather-villagers-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("h");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("q");
        robot.keyToggle("shift", "up");

        break;

      case 'gather-idle-villagers':

        // robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap(".");
        robot.keyToggle("shift", "up");
        // robot.keyToggle("control", "up");
        robot.mouseClick('right');

        break;

      case 'create-halberdier-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("b");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("w");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-arbalester-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("a");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("q");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-skirm-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("a");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("w");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-paladin-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("l");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("w");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-scout-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("l");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("q");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-bombard-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("k");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("r");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-cav-archer-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("a");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("e");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-castle-unit-5':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("v");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyToggle("shift", "down");
        robot.keyTap("q");
        robot.keyToggle("shift", "up");
        robot.mouseClick('left');

        break;

      case 'create-treb':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("v");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.mouseClick('right');
        robot.keyTap("w");
        robot.mouseClick('left');

        break;

      case 'research-age':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("h");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyTap("z");
        robot.mouseClick('left');

        break;

      case 'research-chemistry':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("u");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyTap("t");
        robot.mouseClick('left');

        break;

      case 'research-ballistics':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("u");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyTap("r");
        robot.mouseClick('left');

        break;

      case 'research-fletching':

        robot.keyToggle("control", "down");
        robot.keyToggle("shift", "down");
        robot.keyTap("s");
        robot.keyToggle("shift", "up");
        robot.keyToggle("control", "up");
        robot.keyTap("a");
        robot.mouseClick('left');

        break;

      default:
        console.log(`Not found: ${key}`)
        break;
    }
  }
  else {
    console.log('Skipped: AOE2DE is not the active window');
  }

  res.send();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'react-client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`AOE Macro Server started on port ${port}`);
});
