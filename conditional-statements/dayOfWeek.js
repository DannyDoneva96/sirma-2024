function from0to9(input1) {

    if(Number(input1)<0 || Number(input1)>9){
        return 'too big'
    }else{
        if(input1==0){return'zero'}else if(input1==1){return 'one'}
        else if(input1==2){return 'two'}
        else if(input1==3){return 'three'}
        else if(input1==4){return 'four'}
        else if(input1==5){return 'five'}
        else if(input1==6){return 'six'}
        else if(input1==7){return 'seven'}
        else if(input1==8){return 'eight'}
        else if(input1==9){return 'nine'}

    }

}