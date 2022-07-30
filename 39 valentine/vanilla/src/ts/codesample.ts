const codesample = [`
 /******************************************
  * Hi我是静默,一名后端开发人员              *
  * 平常都在写下面的Java代码                 *
  *****************************************/
class Main{
    public staic void main(String[] args){
        System.out.println("Hello World");
    }
}
`,
`
/**
 *  但是对前端很感兴趣，现在学会了写typescript
 */
 const app = document.getElementById('app')! as HTMLElement
`,
`
/** 看到一个有趣的demo,https://github.com/yacan8/valentine现在自己用css写一下 */
/** 首先我在右边开辟出一块区域，以便观察效果 */
/** 给它一个背景色 */
body .show-box{
    background-color: purple;
}

/** 首先画一个方块作为主题 */
.heart{
    position:absolute;
    width: 100px;
    height: 100px;
    background-color: rgb(250, 12, 12);
    border-radius: 20px;
    transform: rotateZ(45deg);
}

/** 画左心房 */
.heart::before{
    content: " ";
    position: absolute;
    top: 0;
    left: -38px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(250, 12, 12);
}

/** 画右边心房 */
.heart::after{
    content: " ";
    position: absolute;
    top: -38px;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(250, 12, 12);
}

/**设置动画的帧*/
@keyframes dance {
    0% {
        transform: scale(1) rotate(45deg);
        opacity: 1;
    }
    100% {
        transform: scale(1.65) rotate(45deg);
        opacity: 0
    }
}
/** 添加动画 */
.bounce{
    animation: dance 1s linear infinite;
}
/******************************************
 *               完结撒花                  *
 *****************************************/
`]


export {
    codesample,
}