<template>
  <div class="container">
    <div class="sub-container">
        <input type="text" class="text" placeholder="Click on the dots" disabled>
        <div class="menu-wrap">
            <input type="checkbox" class="toggler">
            <div class="dots">
                <div></div>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#" class="link">Option one</a></li>
                    <li><a href="#" class="link">Option two</a></li>
                    <li><a href="#" class="link">Option three</a></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Home'
})
</script>

<style lang="scss" scoped>
    .container{
        height: calc(100vh - 80px);
        background: linear-gradient(#76d7c4, #bb8fce);
        display: flex;
        justify-content: center;
        align-items: center;
        .sub-container{
          
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 500px;
            height: 50px;
            padding: 0 10px;


            .text{
                border: none;
                background: transparent;
                font-size: 18px;
                font-weight: 400;
            }

            .menu-wrap{
                position: relative;
                height: 25px;
                width: 25px;
                
                .toggler{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    appearance: none;

                    &:checked ~ .menu{
                        visibility: visible;
                        opacity: 1;
                    }
                }
                .dots{
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    div,div::before,div::after{
                        height: 6px;
                        width: 6px;
                        background-color: rgba(49, 49, 49, 0.8);
                        border-radius: 50%;
                    }

                    div::before,div::after{
                        content: " ";
                    }

                    div{
                        position: relative;
                        &::before{
                            content: "";
                            position: absolute;
                            top: calc((25px / 2) - (6px / 2));
                            left: 0;
                        }

                        &::after{
                            content: "";
                            position: absolute;
                            bottom: calc((25px / 2) - (6px / 2));
                            left: 0;
                        }
                    }
                }

                .menu{
                    position: absolute;
                    top: 38px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    right: -10px;
                    width: 150px;
                    height: 130px;
                    visibility: hidden;
                    opacity: 0;
                    transition: all 1s ease-in-out;
                    background-color: rgba(255, 255, 255, 0.8);
                    ul{
                        list-style: none;
                        
                        li{
                            padding-bottom: 10px;
                            .link{
                                color: black;
                                text-decoration: none;
                            }
                        }
                        
                    }
                }
            }
        }
    }
</style>