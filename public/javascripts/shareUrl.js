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
    }
    });