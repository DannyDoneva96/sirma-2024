function solve(num){

    let ASCII = {
        "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
        "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
        "41": ")",     "42": "*", }

   
        let reversed = num.toString().split('').reverse();
            let lines = reversed.length;

    for (let i = 1; i <= lines; i++){
         
        for( let every of reversed){
            if(every==0){console.log('ZERO') 
                continue;}
            console.log(ASCII[Number(every)+33].repeat(Number(every)))
        }
    }
}
solve(2049)
