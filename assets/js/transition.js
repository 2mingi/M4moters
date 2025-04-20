document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href');
            
            // 현재 페이지와 타겟 페이지가 같은 경우 해시만 변경되므로 체크
            if (window.location.pathname !== targetPage && 
                window.location.href !== targetPage) {
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.5s';
                
                setTimeout(function() {
                    window.location.href = targetPage;
                }, 500);
            } else {
                window.location.href = targetPage;
            }
        });
    });
});
