 const generaterandomword = wordlength => Math.floor(Math.random() * wordlength);


function operatebutton(){
const phrases = {
items:['box of chocolates','lovely bouquet of flowers','set of your favourite books','message from your old pal'],
places:['London','Paris','New York','Los Angeles'],
day:['great','good','fantastic','wonderful']
}

const newArray = [];
for (let word in phrases){
    randomResult = generaterandomword(phrases[word].length);
    //console.log(randomResult);
    if(word === 'items'){
        newArray.push(`Today you will receive a ${phrases[word][randomResult]}.`);
    }else if(word === 'places'){
        newArray.push(`You will visit ${phrases[word][randomResult]} soon.`);
    }else if(word === 'day'){
        newArray.push(`Have a ${phrases[word][randomResult]} day!`);
    }    
}
  document.getElementById("hello").innerHTML = newArray.join("<br>");
}
  
 