/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
var pannels = document.querySelectorAll('.pannel');
var activeCls = 'active';
pannels.forEach(function (pannel) {
    pannel.addEventListener('click', function () {
        removeAllActive();
        pannel.classList.add(activeCls);
    });
});
function removeAllActive() {
    pannels.forEach(function (pannel) {
        pannel.classList.remove(activeCls);
    });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBNkIsQ0FBQztBQUNqRixJQUFNLFNBQVMsR0FBRyxRQUFRO0FBRTFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQU07SUFDbEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUU3QixlQUFlLEVBQUU7UUFDakIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLFNBQVMsZUFBZTtJQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNO1FBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtc2Fzcy1kZW1vLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYW5uZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbm5lbCcpISBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuY29uc3QgYWN0aXZlQ2xzID0gJ2FjdGl2ZSdcclxuXHJcbnBhbm5lbHMuZm9yRWFjaChwYW5uZWwgPT4ge1xyXG4gICAgcGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuXHJcbiAgICAgICAgcmVtb3ZlQWxsQWN0aXZlKClcclxuICAgICAgICBwYW5uZWwuY2xhc3NMaXN0LmFkZChhY3RpdmVDbHMpXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQWN0aXZlKCkge1xyXG4gICAgcGFubmVscy5mb3JFYWNoKHBhbm5lbCA9PiB7XHJcbiAgICAgICAgcGFubmVsLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xzKVxyXG4gICAgfSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=