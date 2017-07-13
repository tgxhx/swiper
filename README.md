# 一个原生javascript写的轮播图

### html结构
```html
<div id="container">
        <ul id="list">
            <li><img src="images/img1.jpg" alt="1"/></li>
            <li><img src="images/img2.jpg" alt="2"/></li>
            <li><img src="images/img3.jpg" alt="3"/></li>
            <li><img src="images/img4.jpg" alt="4"/></li>
            <li><img src="images/img5.png" alt="5"/></li>
        </ul>
        <div id="buttons">
            <span index="1" class="on"></span>
            <span index="2"></span>
            <span index="3"></span>
            <span index="4"></span>
            <span index="5"></span>
        </div>
        <a href="javascript:;" id="prev" class="arrow">&lt;</a>
        <a href="javascript:;" id="next" class="arrow">&gt;</a>
    </div>
```

### 使用方式
```js
var wrap = new Swiper('container') //传入id
wrap.swiper({
  auto: true,  //是否自动播放
  speed: 300, //切换速度
  delay: 3000 //自动播放切换间隔
})
```