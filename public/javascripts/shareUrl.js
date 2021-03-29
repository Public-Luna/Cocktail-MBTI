const shareData = {
    title: 'MBTI별 칵테일 추천',
    text: '당신에게 어울리는 칵테일은? 지금 확인해보세요!',
    url: window.location.href,
    }

    const btn = document.querySelector('button');
    
    // Must be triggered some kind of "user activation"
    btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData)
        
    } catch(err) {
        $.get("/404");
        /*const agent = navigator.userAgent.toLowerCase(); 
        if(agent.indexOf('Trident')>-1){ alert("IE"); }
        else if(agent.indexOf('safari')>-1){ alert("사파리"); }
        else if(agent.indexOf('chrome')>-1){ alert("크롬"); }
        else if(agent.indexOf('firefox')>-1){ alert("파이어폭스"); }
        else if(agent.indexOf('opera')>-1){ alert("오페라"); }*/

        const tempElem = document.createElement('textarea');
        tempElem.value = window.location.href;  
        document.body.appendChild(tempElem);
      
        tempElem.select();
        document.execCommand("copy");
        document.body.removeChild(tempElem);
        alert('링크가 복사되었습니다!');
    }
    });