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
function forward() {
    idx++;
    if (idx > imgs.length - 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBaUI7QUFDL0UsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWlCO0FBQ3BFLElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQTZCO0FBRTlFLElBQUksR0FBRyxHQUFHLENBQUM7QUFDWCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7QUFFeEIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUM7QUFHeEMsU0FBUyxPQUFPO0lBQ1osR0FBRyxFQUFFO0lBQ0wsSUFBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDckIsR0FBRyxHQUFHLENBQUM7S0FDVjtJQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFCQUFjLENBQUMsSUFBSSxHQUFHLEdBQUcsUUFBSztBQUNsRSxDQUFDO0FBR0QsU0FBUyxXQUFXO0lBQ2hCLElBQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUdELE9BQU87QUFDUCxpREFBaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1zYXNzLWRlbW8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZ3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1ncy1jb250YWluZXInKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgaW1ncyA9IGltZ3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJykhIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XHJcblxyXG5sZXQgaWR4ID0gMFxyXG5sZXQgc2l6ZSA9IGNvbXB1dGVTaXplKClcclxuXHJcbmxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZvcndhcmQsMjAwMClcclxuXHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkKCl7XHJcbiAgICBpZHgrKyAgICBcclxuICAgIGlmKGlkeCA+IGltZ3MubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgaWR4ID0gMFxyXG4gICAgfVxyXG4gICAgaW1nc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1zaXplICogaWR4fXB4KWBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVTaXplKCk6bnVtYmVye1xyXG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGNhcm91c2VsKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpXHJcbiAgICByZXR1cm4gK3dpZHRoLnN1YnN0cmluZygwLHdpZHRoLmxlbmd0aC0yKVxyXG59XHJcblxyXG5cclxuLy8gbG9vcFxyXG4vLyBodHRwczovL2NvZGVwZW4uaW8vam9uYXRoYW4tYXNiZWxsL3Blbi9RV2dhbXB2Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9