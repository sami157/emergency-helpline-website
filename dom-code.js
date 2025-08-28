const heartCountInitial=0
const coinCountInitial=100
const copyCountInitial=0
let heartCount = heartCountInitial
let coinCount = coinCountInitial
let copyCount = copyCountInitial
document.getElementById('heart-count').innerText = heartCountInitial
document.getElementById('coin-count').innerText = coinCountInitial
document.getElementById('copy-count').innerText = copyCountInitial + ' Copy'
function processClick(
    inputClass,
    count,
    targetID, 
    countStep,  
    hasCountLimit,
    countLimitType,
    countLimit,
    countLimitMessage,
    extraText
 ){
    for (let target of document.getElementsByClassName(inputClass)){
    target.addEventListener('click', function(){
        if(hasCountLimit){
            if(countLimitType==='u'){
                if(count>=countLimit){
                    console,log('Limit Over')
                }
                else count = count + countStep
            }
            if(countLimitType==='l'){
                if(count<=countLimit){
                    console.log('Limit Under')
                }
                else count = count + countStep
            }
        }
        else count = count + countStep;
        document.getElementById(targetID).innerText = count + extraText
        console.log('clicked')
        })
    }
}
processClick('fa-heart',heartCount,'heart-count',1,false,'',0,'','');
processClick('call-button',coinCount,'coin-count',-20,true,'l',0,'','');
processClick('copy-button',copyCount,'copy-count',1,false,'',0,'',' Copy');