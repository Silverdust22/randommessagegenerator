 

const generaterandomword = wordlength =>{
    return Math.floor(Math.random() * wordlength)
}

function printArray(element){
    if (element === 'Today you will receive a box of chocolates.'){
    console.log(element,String.fromCodePoint(0x1F36C));
}else if(element === 'Today you will receive a lovely bouquet of flowers.'){
    console.log(element,String.fromCodePoint(0x1F395));
}
    else{
    console.log(element);
    }
}

const phrases = {
day:['great','good','fantastic','wonderful'],
items:['box of chocolates','lovely bouquet of flowers','set of your favourite books','message from your old pal'],
places:['London','Paris','New York','Los Angeles']
}

const newArray = [];
for (let word in phrases){
    randomResult = generaterandomword(phrases[word].length);
    //console.log(randomResult);
    if(word === 'day'){
        newArray.push(`Have a ${phrases[word][randomResult]} day!`);
    }else if(word === 'items'){
        newArray.push(`Today you will receive a ${phrases[word][randomResult]}.`);
    }else if(word === 'places'){
        newArray.push(`Soon you will visit ${phrases[word][randomResult]}!`);
    }else{
        console.log('Please try again')
    } 
}
    //console.log(newArray);
    newArray.forEach(printArray);
        
//console.log(String.fromCodePoint(0x1F36C));