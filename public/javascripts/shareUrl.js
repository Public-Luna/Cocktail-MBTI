const shareData = {
    title: 'Cocktail-MBTI',
    text: '당신의 MBTI는?',
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