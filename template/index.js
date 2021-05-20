/*
 * @Author: zulezhe
 * @Date: 2021-05-08 16:48:19
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-05-20 10:05:08
 * @Path: https://gitee.com/zulezhe/
 * @Description: $
 */
(() => {
  fetch('./menu.json', { method: 'get' })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      document.querySelector('.slide').innerHTML = `
        <ul class="nav">
          ${result
            .map(
              (item) => `
              <li>
                <a href="javascript:;">${item.title}</a>
                <ul>
                    ${item.children.map((el) => `<li class="item" data-link="${el.link}"><a href="javascript:;">${el.title}</a></li>`).join('')}
                </ul>
              </li>
            `
            )
            .join('')}  
        </ul>
      `;
      var nav = document.querySelector('.nav');

      var lis = nav.children;
      for (var i = 0; i < nav.children.length; i++) {
        lis[i].onclick = function (e) {
          if (this.children[1].style.display == 'none') {
            this.children[1].style.display = 'block';
          } else {
            this.children[1].style.display = 'none';
          }
        };
      }
      let itemList = document.querySelectorAll('.item');
      let iframe = document.querySelector('.preview');
      for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i];
        item.onclick = function (e) {
          removeClass(itemList, 'active');
          addCookie('activeItem', i);
          this.classList.add('active');
          iframe.src = this.getAttribute('data-link');
          e.stopPropagation();
          return false;
        };
      }
      let index = getCookie('activeItem');
      index ? itemList[index].click() : itemList[0].click();
    });
  function removeClass(itemList, className) {
    for (let i = 0; i < itemList.length; i++) {
      const item = itemList[i];
      item.classList.remove(className);
    }
  }
  function addCookie(key, value) {
    document.cookie = key + '=' + value;
  }
  function getCookie(key) {
    var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
    if (arr != null) {
      console.log(arr);
      return unescape(arr[2]);
    }
    return null;
  }
})();
