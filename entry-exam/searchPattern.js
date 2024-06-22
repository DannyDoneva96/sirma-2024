function searchPattern(array,name){

  // return Record not found if there is no consilience
      if (array.indexOf(name)==-1){console.log(`Record not found`)
        return
      }

      // print first index 
      console.log(`First Occurrence: ${array.indexOf(name)}`)
       // print last index
       console.log(`Last Occurrence: ${array.lastIndexOf(name)}`);
   
}
searchPattern(['Dani','Gosho','Pesho','Dani'],'Dani')