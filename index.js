/*
 * @Author: zulezhe
 * @Date: 2021-05-08 16:48:19
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-05-08 16:49:08
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
          console.log(this.getAttribute('data-link'));
          iframe.src = this.getAttribute('data-link');
          e.stopPropagation();
          return false;
        };
      }
    });
})();
