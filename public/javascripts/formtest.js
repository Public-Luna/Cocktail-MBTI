

/*$(() => {
    $('.q0').show()
})
*/
//ans에 대한 유효성 처리 코드 넣기

function next(ans) {
    var postData=[];
    var num = 0
    
    try{
        if(ans === 0 || ans === 1){
            if (num < 11) {
                postData.push(ans);
                num++;
            
            }else if(num == 11){
                num++;
                postData.push(ans);
                
                console.log(postData)
    
       
            }
            return ans;
        }
    }
    catch{
        if(ans >1 && ans <0)
        {
            console.log("0,1 이외의 숫자");
        }
        else if(isNaN(ans)){
            console.log("문자");
        }
    }

// error 처리를 try catch-> 
//
//try {
//console.log("ssfdsf");    
//}catch{
    
    //if (0,1이 아닐 때)  error 처리 

    //else if(문자일 떄) error 처리

//}


}
module.exports=next; 