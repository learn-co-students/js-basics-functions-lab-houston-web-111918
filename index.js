// Code your solution in this file!

const headquarters = 42

function distanceFromHqInBlocks(blocks){
    return Math.abs(headquarters - blocks) 
}

const oneblock = 264

function distanceFromHqInFeet(poop){
   return distanceFromHqInBlocks(poop) * oneblock 
}

function distanceTravelledInFeet(start, end){
   return Math.abs(start - end) * oneblock
}

function calculatesFarePrice(start, destination){
    let temp = distanceTravelledInFeet(start, destination)
    let cost = 0

    if(temp <= 400){
        return 0;
    } 
    else if(temp >400 && temp <=2000){
       cost = temp - 400
       cost = cost * 0.02
       return cost
   }
   else if (temp >2000 && temp < 2500){
       return 25
   }
   else {
       return "cannot travel that far"
   }


}