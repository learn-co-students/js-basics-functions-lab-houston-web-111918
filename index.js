// Code your solution in this file!
function distanceFromHqInBlocks(val){
    if(val <= 42){
        return (42-val)
    }
    else{
        return (val-42)
    }
}

function distanceFromHqInFeet(val){
    let value = distanceFromHqInBlocks(val);
    return (value*264)
}

function distanceTravelledInFeet(val1, val2){
    let number;
    if(val2 < val1){
        number = val1 - val2
    }
    else if(val1 < val2){
        number = val2 - val1
    }
    return (number * 264)
}

function calculatesFarePrice(start, destination){
   const number = distanceTravelledInFeet(start, destination);
   if(number <= 400){
       return 0;
   }
   else if(number > 400 && number < 2000){
       return ((number-400)*.02)
   }
   else if(number > 2000 && number <= 2500){
       return 25
   }
   else {
       return 'cannot travel that far'
   }

}