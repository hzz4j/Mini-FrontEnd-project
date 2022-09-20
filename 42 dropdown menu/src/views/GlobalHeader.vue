<template>
  <nav class="menu-bar">
    <h1 class="logo">Light <span>Code.</span></h1>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pages <span>↓</span></a>
            <div class="dropdown-menu">
                <ul>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li>
                        <a href="#"> Team <span>↓</span></a>
                        <div class="dropdown-menu-1">
                            <ul>
                                <li><a href="#">Team-1</a></li>
                                <li><a href="#">Team-2</a></li>
                                <li><a href="#">Team-3</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact US</a></li>
    </ul>
  </nav>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'GlobalHeader'
})
</script>

<style lang="scss">
@import '../scss/common.scss' ;

.menu-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-black;
    padding: 10px;
    height: 80px;
    width: 100%;

    .logo{
        color: $color-white;
        font-size: 30px;
        span{
            color: $color-primary;
        }
    }

    ul{
        display: flex;
        list-style: none;

        li{
            padding: 10px 30px;
            position: relative;

            &:hover{
                .dropdown-menu{
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 100%;
                    padding: 20px 0;
                    background-color: $color-black;
                    ul{
                        display: block;
                    }
                }

                
            }


            a{
                color: $color-white;
                text-decoration: none;
                &:hover{
                    color: $color-primary;
                }
            }
        }
    }

    .dropdown-menu{
        display: none;

        li:hover{
            .dropdown-menu-1{
                display: block;
                position: absolute;
                left: 120px;
                top: 0;
                background-color: $color-black;
            }
        }
    }
    
    .dropdown-menu-1{
        display: none;
        white-space: nowrap;
        &:hover{
            display: block;
        }
    }
}
</style>