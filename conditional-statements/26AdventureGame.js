function adventureGame(item1,item2){

    if (item1 !== 'sword' && item1 !== 'map') {
        return 'Wander aimlessly';
    }

      if(item1=='sword'){
        if(item2=='shield'){return 'Path to castle'}else{return 'Path to the forest'}
      }else if( item1== 'map'){
        if(item2=='coins'){return 'Go to the town'}else{return 'Camp'}

      }
}
console.log(adventureGame('tourch','map'));
console.log(adventureGame('sword','shield'));
console.log(adventureGame('map','coins'));

console.log(adventureGame('sword','pouvh'));
console.log(adventureGame('map','compass'));
