const heartCountInitial=0
const coinCountInitial=100
const copyCountInitial=0
let heartCount = heartCountInitial
let coinCount = coinCountInitial
let copyCount = copyCountInitial
let canCall = true
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
    extraText,
    clickMessage
 ){
    for (let target of document.getElementsByClassName(inputClass)){
    target.addEventListener('click', function(event){
        if(hasCountLimit){
            if(countLimitType==='u'){
                if(count>=countLimit){
                    console,log('Limit Over')
                    canCall = false;
                }
                else count = count + countStep
            }
            if(countLimitType==='l'){
                if(count<=countLimit){
                    console.log('Limit Under')
                    canCall = false;
                }
                else count = count + countStep
            }
        }
        else count = count + countStep;
        document.getElementById(targetID).innerText = count + extraText
        let callNumber = event.currentTarget.parentElement.parentElement.children[1].children[0].innerText
        let callName = event.currentTarget.parentElement.parentElement.children[0].children[0].innerText
        if(clickMessage!==null){
            if(inputClass==='call-button'){
                if(!canCall){
                    alert("Can't place call, no coins remaining")
                }
                else {
                    let time = new Date().toLocaleTimeString()
                    let callHistoryContainer = document.getElementById('call-history-container')
                    let listItemContainer = callHistoryContainer.children[1]
                    let listItem = document.createElement('div')
                    listItem.classList.add("text-[18px]", "rounded-[12px]", "p-[16px]", "flex", "justify-between", "bg-[#FAFAFA]")
                    listItem.innerHTML = '<div class="history-card-left gap-[4px] items-center"><p>'+ callName+'</p><p>'+callNumber+'</p></div><div class="flex items-center copy-count-text">'+ time + '</div>'
                    console.log(listItem)
                    listItemContainer.appendChild(listItem)
                    alert('Calling '+ callName + ' ' + '('+ callNumber + ')')
                }
            }
            else if(inputClass==='copy-button'){
                navigator.clipboard.writeText(callNumber);
                alert(callNumber + ' copied to clipboard')
            }
        }
        })
    }
}
processClick('fa-heart',heartCount,'heart-count',1,false,'',0,'','','');
processClick('call-button',coinCount,'coin-count',-20,true,'l',0,'','',);
processClick('copy-button',copyCount,'copy-count',1,false,'',0,'',' Copy');