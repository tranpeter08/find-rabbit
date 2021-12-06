const holes = new Array(4).fill(false);
let rabbitPosition = null;

function start() {
  if (rabbitPosition != null) return;
  rabbitPosition = Math.floor(Math.random() * holes.length);
  holes[rabbitPosition] = true;
  console.log('rabbit starting at ', rabbitPosition);
}

function hop() {
  holes[rabbitPosition] = false;
  if (rabbitPosition === 0) {
    rabbitPosition += 1;
  } else if (rabbitPosition === holes.length - 1) {
    rabbitPosition -= 1;
  } else {
    let moveRight = Math.random() > 0.5;
    if (moveRight) {
      rabbitPosition += 1;
    } else {
      rabbitPosition -= 1;
    }
  }
  holes[rabbitPosition] = true;
  console.log('rabbit hopped to ', rabbitPosition);
}

function guess(pos) {
  start();
  console.log('Is rabbit at ', pos, '?');
  if (holes[pos]) {
    console.log('Found rabbit at ', pos);
    return true;
  }
  console.log('incorrect guess');
  hop();
  return false;
}

function isRabbitAt(i) {
  return guess(i) || guess(i);
}

function findRabbit() {
  // check if rabbit starts on even
  for (let i = 0; i < holes.length; i++) {
    if (isRabbitAt(i)) return;
  }
  console.log('\nSECOND TRY\n');

  // check if rabbit starts on odd
  for (let i = 1; i < holes.length; i++) {
    if (isRabbitAt(i)) return;
  }

  console.log('Failed to find rabbit');
}

findRabbit();
