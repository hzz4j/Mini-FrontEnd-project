/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
var inputText = document.getElementById('text');
var todoList = document.getElementById('todo-list');
var liEls = todoList.querySelectorAll('.todo-item');
liEls.forEach(function (li) { return addBtnClickListener(li); });
// 检测键盘事件
inputText.addEventListener('keypress', function (e) {
    if (!e)
        return;
    var target = e.target;
    //console.log('keypress: ',e.key);
    if (e.key === 'Enter') {
        var liEl = createLiElment(target.value);
        todoList.appendChild(liEl);
        // clear
        target.value = '';
    }
});
function createLiElment(text) {
    var li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = "\n        <span class=\"todo-item-text\">".concat(text, "</span>\n        <button class=\"btn\">\n            X\n        </button>\n    ");
    addBtnClickListener(li);
    return li;
}
function addBtnClickListener(li) {
    if (li) {
        li.querySelector('.btn').addEventListener('click', function () {
            li.remove();
        });
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUU7QUFDbEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUU7QUFDdEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBNkI7QUFFakYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFFLElBQUcsMEJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUM7QUFFM0MsU0FBUztBQUNULFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUMsV0FBQztJQUNuQyxJQUFHLENBQUMsQ0FBQztRQUFFLE9BQU07SUFDYixJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBMEIsQ0FBQztJQUM1QyxrQ0FBa0M7SUFDbEMsSUFBRyxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBQztRQUNqQixJQUFNLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRO1FBQ1IsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO0tBQ3BCO0FBQ0wsQ0FBQyxDQUFDO0FBR0YsU0FBUyxjQUFjLENBQUMsSUFBVztJQUMvQixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDN0IsRUFBRSxDQUFDLFNBQVMsR0FBRyxtREFDb0IsSUFBSSxvRkFJdEM7SUFDRCxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7SUFDdkIsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxFQUFjO0lBQ3ZDLElBQUcsRUFBRSxFQUFDO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUM7WUFDL0MsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNmLENBQUMsQ0FBQztLQUNMO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXNhc3MtZGVtby8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykhXHJcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpIVxyXG5jb25zdCBsaUVscyA9IHRvZG9MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKSEgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cclxuXHJcbmxpRWxzLmZvckVhY2gobGkgPT5hZGRCdG5DbGlja0xpc3RlbmVyKGxpKSlcclxuXHJcbi8vIOajgOa1i+mUruebmOS6i+S7tlxyXG5pbnB1dFRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLGUgPT4ge1xyXG4gICAgaWYoIWUpIHJldHVyblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIC8vY29uc29sZS5sb2coJ2tleXByZXNzOiAnLGUua2V5KTtcclxuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICBjb25zdCBsaUVsID0gY3JlYXRlTGlFbG1lbnQodGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGxpRWwpXHJcbiAgICAgICAgLy8gY2xlYXJcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSAnJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpRWxtZW50KHRleHQ6c3RyaW5nKTpIVE1MTElFbGVtZW50e1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxyXG4gICAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1pdGVtLXRleHRcIj4ke3RleHR9PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5cclxuICAgICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgYWRkQnRuQ2xpY2tMaXN0ZW5lcihsaSlcclxuICAgIHJldHVybiBsaTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQnRuQ2xpY2tMaXN0ZW5lcihsaTpIVE1MRWxlbWVudCl7XHJcbiAgICBpZihsaSl7XHJcbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcignLmJ0bicpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgbGkucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9