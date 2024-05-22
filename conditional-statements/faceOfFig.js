function faceOfFig(string,...integers){
    let figure= string;
    let arrayOfIntegers = integers

    if (figure == "square"){
        let lengthOfSide = integers[0]
        let result = lengthOfSide * lengthOfSide
        return result.toFixed(2)
    }
    else if(figure == "rectangle"){
        let lengthOfSide1 = integers[0]
        let lengthOfSide2 = integers[1]

        let result = lengthOfSide1 * lengthOfSide2
        return result.toFixed(2)
    } else if(figure == "triangle"){
        let lengthOfSide = integers[0]
        let heightOfSide = integers[1]

        let result = lengthOfSide * heightOfSide /2
        return result.toFixed(2)
    }else if(figure == "circle"){
        let radius = integers[0]

        let result = Math.PI * radius * radius
        return result.toFixed(2)
    
    }
}

console.log(faceOfFig('square',5))
console.log(faceOfFig('circle',10))

console.log(faceOfFig('rectangle',10,3.5))
