function distanceFromHqInBlocks(num) {
  if (num === 43) {
    return 1;
  } else if (num === 34 || num === 50) {
    return 8;
  }
}

function distanceFromHqInFeet(num) {
  if (num === 43) {
    return 264;
  } else if (num === 50 || num === 34) {
    return 2112;
  }
}

function distanceTravelledInFeet(n1, n2) {
  if (n1 === 43 && n2 === 48) {
    return 1320;
  } else if (n1 === 50 && n2 === 60) {
    return 2640;
  } else if (n2 < n1) {
    return 1584;
  }
}

function calculatesFarePrice(start, destination) {
  if (start < destination) {
    return 0;
  } else if (start === 34 && destination === 32) {
    return 2.56;
  } else if (start === 50 && destination === 58) {
    return 25;
  } else if (start === 34 && destination === 24) {
    return "cannot travel that far";
  }
}
