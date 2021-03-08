var postData=[];
var num = 0

$(() => {
    $('.q0').show()
})

// $("#A").click(function(){
//     next(0);
// });
// $("#B").click(function(){
//     next(1);
// });

// 정은 여기 잠들다 ;;ㅡㅡ;;
//$(".progs").width('calc(100 / 12' + num+'%');
//$(".progs").css({'width': 'calc(100 / 12' + num+'%'});
//$(".progs").attr('style','width: calc(100 / 12' +num+'%');
//안 된 방법들
//$(".progress-bar").attr('style','width: calc(100 / 12' +num+'%');
//부트스트랩 progress bar 사용해서 했을 때는 됨

function next(ans) {
    if (num < 11) {
        postData.push(ans);
        $('.q'+num).hide();
        num++;
        $('.q'+num).show();
        $(".progs").width('calc(100 / 12*' + (num+1)+'%');
        // $("#title").html(q[num]["title"]);
        // $("#content").html(q[num]["content"]);
        // $("#A").html(q[num]["A"]);
        // $("#B").html(q[num]["B"]);
    }else if(num == 11){
        num++;
        postData.push(ans);
        console.log(postData)

        $.ajax({
            type : "post",
            url : "/form",
            contentType : "application/json",
            data : JSON.stringify({
                form: postData
            })
        }).done(function( data ) {
            location.href = '/report/'+data.redirect
        });
    }
}