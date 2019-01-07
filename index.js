const headqarter = 42;

function distanceFromHqInBlocks(street) {
  if (headqarter === 42) {
    return Math.abs(headqarter - street);
  }
}

const block = 264;

function distanceFromHqInFeet(distanceFromHqInBlocks) {
  return block * Math.abs(distanceFromHqInBlocks - headqarter);
}

function distanceTravelledInFeet(distanceFromHqInBlocks, street) {
  return Math.abs(distanceFromHqInBlocks - street) * block;
}

const first_400_free = 400;

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - first_400_free) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }

  // console.log((Math.abs(start-destination))-first_400_free)
}
