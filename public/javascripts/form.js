var postData=[];
var num = 0

$(() => {
    $('.q0').show()
})

function next(ans) {
    if (num < 11) {
        postData.push(ans);
        $('.q'+num).hide();
        num++;
        $('.q'+num).show();
        $(".progs").width('calc(100 / 12*' + (num+1)+'%');
       
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