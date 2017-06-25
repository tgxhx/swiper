/**
 * Created by tgxh on 2017/6/25.
 */

;(function () {
  var wrap = document.querySelector('#container'),
    ul = wrap.querySelector('ul'),
    list = ul.querySelectorAll('li'),
    winWidth = document.body.clientWidth,
    prev = wrap.querySelector('#prev-arrow'),
    next = wrap.querySelector('#next-arrow'),
    n = 1 //初始位置

  ul.appendChild(list[0].cloneNode(true))
  ul.insertBefore(list[list.length - 1].cloneNode(true), list[0])

  var list = ul.querySelectorAll('li')
  setStyle(ul, {
    width: list.length * 100 + '%',
    left: n * -100 + '%'
  })
  list[n].classList.add('active')

  list.forEach(function (v) {
    v.style.cssText += 'width:' + winWidth + 'px'
  })

  next.addEventListener('click', function () {
    if (n >= list.length - 1) {
      n = 2
    } else {
      n++
    }
    ul.style.left = n * -100 + '%'
    showButton()
  })

  prev.addEventListener('click', function () {
    if (n <= 1) {
      n = list.length - 2
    } else {
      n--
    }
    ul.style.left = n * -100 + '%'
    showButton()
  })

  function showButton() {
    list.forEach(function (v) {
      if (v.className == 'active') {
        v.classList.remove('active')
      }
    })
    list[n].classList.add('active')
  }

  function setStyle(obj, style) {
    for (var i in style) {
      obj.style[i] = style[i]
    }
  }
})()