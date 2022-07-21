/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
var imgsContainer = document.getElementById('imgs-container');
var carousel = document.getElementById('carousel');
var imgs = imgsContainer.querySelectorAll('img');
var idx = 0;
var size = computeSize();
var interval = setInterval(forward, 2000);
imgsContainer.addEventListener('transitionend', function () {
    console.log("transitionend");
});
function forward() {
    idx++;
    if (idx > imgs.length - 1) {
        // first limit counter to prevent fast-change bugs
        // 解决快速回退的问题
        idx = 0;
    }
    imgsContainer.style.transform = "translateX(".concat(-size * idx, "px)");
}
function computeSize() {
    var width = getComputedStyle(carousel).getPropertyValue('width');
    return +width.substring(0, width.length - 2);
}
// loop
// https://codepen.io/jonathan-asbell/pen/QWgampv

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBaUI7QUFDL0UsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWlCO0FBQ3BFLElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQTZCO0FBRTlFLElBQUksR0FBRyxHQUFHLENBQUM7QUFDWCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7QUFFeEIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUM7QUFJeEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRWpDLENBQUMsQ0FBQztBQUVGLFNBQVMsT0FBTztJQUNaLEdBQUcsRUFBRTtJQUNMLElBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ3JCLGtEQUFrRDtRQUNsRCxZQUFZO1FBRVosR0FBRyxHQUFHLENBQUM7S0FDVjtJQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFCQUFjLENBQUMsSUFBSSxHQUFHLEdBQUcsUUFBSztBQUNsRSxDQUFDO0FBR0QsU0FBUyxXQUFXO0lBQ2hCLElBQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUdELE9BQU87QUFDUCxpREFBaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1zYXNzLWRlbW8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZ3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1ncy1jb250YWluZXInKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgaW1ncyA9IGltZ3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJykhIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XHJcblxyXG5sZXQgaWR4ID0gMFxyXG5sZXQgc2l6ZSA9IGNvbXB1dGVTaXplKClcclxuXHJcbmxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZvcndhcmQsMjAwMClcclxuXHJcblxyXG5cclxuaW1nc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywoKT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJ0cmFuc2l0aW9uZW5kXCIpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkKCl7XHJcbiAgICBpZHgrKyAgICBcclxuICAgIGlmKGlkeCA+IGltZ3MubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgLy8gZmlyc3QgbGltaXQgY291bnRlciB0byBwcmV2ZW50IGZhc3QtY2hhbmdlIGJ1Z3NcclxuICAgICAgICAvLyDop6PlhrPlv6vpgJ/lm57pgIDnmoTpl67pophcclxuICAgICAgIFxyXG4gICAgICAgIGlkeCA9IDBcclxuICAgIH1cclxuICAgIGltZ3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstc2l6ZSAqIGlkeH1weClgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wdXRlU2l6ZSgpOm51bWJlcntcclxuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKVxyXG4gICAgcmV0dXJuICt3aWR0aC5zdWJzdHJpbmcoMCx3aWR0aC5sZW5ndGgtMilcclxufVxyXG5cclxuXHJcbi8vIGxvb3BcclxuLy8gaHR0cHM6Ly9jb2RlcGVuLmlvL2pvbmF0aGFuLWFzYmVsbC9wZW4vUVdnYW1wdiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==