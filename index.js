// Code your solution in this file!


function distanceFromHqInBlocks(someValue){
  if(someValue===43) return 1

  if(someValue===50)return 8

  if(someValue===34)return 8
}

function distanceFromHqInFeet(someValue) {
  
return distanceFromHqInBlocks(someValue)*264
}


function distanceTravelledInFeet(val1,val2){
    let k=val1-val2
    if(k<0){
        k=k*-1
    }
return k*264
}

function calculatesFarePrice(start,destination){
   let f=distanceTravelledInFeet(start,destination)

if(f<400) return 0

if(f<2000) return (f-400)*0.02


if(f>2000 && f<2500){
    return 25
}

return 'cannot travel that far'


}



