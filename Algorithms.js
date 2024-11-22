const sarf = [2000,1000,500,200,100,50,20,10,5]
let vide = {}

function calcbill (bill){
for (i=0; i<sarf.length; i++){
    let bills = ( bill / sarf[i] )
    const floor = Math.floor(bills)
    if (floor !== 0 ){
    vide[sarf [i]] = floor;
    bill = bill - sarf[i]*floor

    }
     
 }
 console.log(vide)

}
calcbill (1975)








