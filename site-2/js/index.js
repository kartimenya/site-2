let btnLeft = document.getElementsByClassName('btn-left')[0],
    btnRight = document.getElementsByClassName('btn-right')[0],
    posts = document.getElementsByClassName('posts')[0],
    left = 0;

    //slider
    btnRight.onclick = function slider() {
      left = left - 497;

      if (left <= -994) {
        left = -994;
        btnRight.classList.add('btn-active');
      }else {
        btnLeft.classList.remove('btn-active');
      }
      posts.style.left = left + 'px';
    };

    btnLeft.onclick = function slider() {
      left = left + 497;

      if (left >= 0) {
        left = 0;
        btnLeft.classList.add('btn-active')
      }else {
        btnRight.classList.remove('btn-active');
      }
      posts.style.left = left + 'px';
    };
