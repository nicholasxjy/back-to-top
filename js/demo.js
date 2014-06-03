window.onload = function() {
    var timer = null;
    var clientHeight = document.documentElement.clientHeight;
    var btn = document.getElementById('btn');
    var isTop = true;
    window.onscroll = function() {
        var topHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if (topHeight >= clientHeight) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        // if scroll during to top, should stop
        isTop = false;
    }

    btn.onclick = function() {
        timer = setInterval(function() {
            var topH = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-topH / 6);
            document.documentElement.scrollTop = document.body.scrollTop = topH + speed;
            if (topH === 0) {
                clearInterval(timer);
            }
            isTop = true;
        }, 30);
    }
}