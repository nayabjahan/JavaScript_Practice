let countHead=0;
let countTail=0;
while(true){
    let toss = Math.floor(Math.random()*10 %2)
    if(toss==0){
        countHead++;
        
    }else{
        countTail++;
    }
    if(countHead==11||countTail==11){
        console.log("Head count :"+countHead+" "+"Tail Count : "+countTail)
        break;
    }
}