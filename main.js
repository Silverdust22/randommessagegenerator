 const generaterandomword = wordlength =>{
    return Math.floor(Math.random() * wordlength)
}

function operatebutton(){
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
        newArray.push(`You will visit ${phrases[word][randomResult]} soon.`);
    }else{
        console.log('Please try again')
    } 
}
   document.getElementById("hello").innerHTML = newArray.join("<br>");
}
  
 