const bgImg= document.getElementById('bg-img')
const change = ['/EEDImages/background cover.jpeg', '/EEDImages/chic handbag.jpeg','/EEDImages/Aside bag.jpeg','/EEDImages/fashionable hat.jpeg','/EEDImages/background cover.jpeg']
let count = 0

setInterval(() => {
    bgImg.src = change[count];
    if(count >3){
        count= 0
    }
    count ++ 
},2500);