function codeChipher(str, n) {

    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push((String.fromCharCode(str.charAt(i).charCodeAt() - n)))

    }
    console.log(result.join(''))
    // it is a little bit unreadable but what i did is to 
    // loop all the letters--> get the ascii code--> subtract n and push the letter I get in my arrray 
    //tthen join the result in one string

}
codeChipher('Uifsf!jt!b!tfdsfu"', 1)