<template>
  <div class="container">
      <header>
        <h4 class="title">Live User Filter</h4>
        <small class="subtitle">Search by name and/or location</small>
        <input type="text" 
          class="search" 
          v-model.trim="search"
          placeholder="Search...">
      </header>
      
      <ol class="userlist" id="userlist">
        <li v-if="userList.length===0" class="userinfo">
          <h3>Loading...</h3>
        </li>
        <template v-else>
            <li v-if="userListFilter.length===0" class="userinfo">
                <h3>Not Match...</h3>
            </li>
            <template v-else>
                <li v-for="(userInfo,idx) in userListFilter"
                :key="idx"
                class="userinfo">
                    <img :src="userInfo.img" alt="">
                    <div>
                        <h4 class="username">{{userInfo.name}}</h4>
                        <p class="location">{{userInfo.location}}</p>
                    </div>
                </li>
            </template>
        </template>
      </ol>
    </div>
</template>

<script lang="ts" setup>

import {ref,onMounted,watch,computed,reactive } from 'vue'
import type { Ref } from 'vue';
import type UserInfo from '../ts/types';
import RAND_USER_API from '../ts/config';

const search = ref("")
// const userList:Ref<UserInfo[]> = ref([])
const userList:UserInfo[] = reactive([])

onMounted(async ()=>{
    const res = await fetch(RAND_USER_API)
    const data = await res.json()// 解构
    let results = data.results as any[]
    results.forEach((user:any) => {
        let userInfo:UserInfo = {
            img: user.picture.large,
            name: user.name.first,
            location: user.location.city
        }

        // userList.value.push(userInfo)
        userList.push(userInfo)
    })

    
})

watch(search,(val)=>{
    console.log(val)
})

/**
 * 通过computed属性来控制数据
 */
const userListFilter = computed(()=>{ 
    let content = search.value.toLowerCase()
    // let res = userList.value.filter(user => user.name.toLowerCase().trim().includes(content))
    let res = userList.filter(user => user.name.toLowerCase().trim().includes(content))

    return res
})

</script>



<style lang="scss" scoped>

@import '../scss/_common_variables';

.container{
    background-color: $white;
    max-width: 300px;
    // max-width: 100%;
    color: $white;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(76, 100, 238, 0.8);
    overflow: hidden;

    header{
      padding: 20px;
      background-color: $blue;

      .subtitle{
        display: inline-block;
        margin: 10px 0 20px;  // small 标签得变成inline-block margin才会生效
        opacity: 0.6;
      }

      .search{
        width: 100%;
        padding: 10px 15px;
        border-radius: 20px;
        border: none;
        background-color: rgba($color: #000000, $alpha: 0.3);
        color: white;
        &:focus{
          outline: none;
        }
      }

    }

    .userlist{
      color:$dark;
      
      list-style: none;
      max-height: 400px;
      overflow-y: auto;

      .userinfo{
        display: flex;
        padding: 20px;

        // 下划线得设置
        &:not(:last-of-type){
          border-bottom: 1px solid $gray;
        }

        &.hidden{
          display: none;
        }

        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        div{
          margin-left: 10px;
          .username{
            font-size: 1rem;
          }

          .location{
            margin-top: 10px;
            font-size: 0.5rem;
          }
        }
      }
    }
  }

</style>