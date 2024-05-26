

function solve(){

    for(let i=0;i<=100;i++){

         console.log(i)

    }

  

}

solve()


 

----4----

 

function solve(n,m){

   

    for(let i=1;i<=n;i+=m){

         console.log(i)

    }

  

}

solve(10,2)

 

-------5--------

function solve(string){

    

    for(let i=0;i<string.length;i++){

         console.log(string.charAt(i))

    }

  

}

solve('hello')

 

----6-----

function solve(string){

     

      let sum = 0

    for(let i=0;i<string.length;i++){


       if(string.charAt(i)=='a'){ sum+=1 }

     

  else if (string.charAt(i)=='e'){ sum+=2 }

         

   else if (string.charAt(i)=='i'){ sum+=3 }

        

      else if (string.charAt(i)=='o'){ sum+=4 }

        

        else if (string.charAt(i)=='u'){ sum+=5 }

     

   

    }

    console.log(sum)

  

}

solve('hello')

 

------7--------------

function solve(){

    for(let i=0; i<24; i++){

        let h = i < 10 ? `0${i}` : i;

       

        for(let j=0; j<60; j++){

            let m = j < 10 ? `0${j}` : j;

            console.log(`${h}:${m}`);

        }

    }

}

 

solve();

 

------8-------

function solve(){

    for(let i=1; i<=10; i++){

      

        

        for(let j=1; j<11; j++){

      

            console.log(`${i} * ${j} = ${i*j}`);

        }

    }

}

 

solve();

---9----------

// i will write solution of the problem

// based on the examples provided

function solve(n){

   if(n % 2 == 0){console.log(n) }else{console.log(`${(n+1) * n}`)}

}

 

solve(3);

solve(5);

solve(1);

solve(0);

solve(10);

 