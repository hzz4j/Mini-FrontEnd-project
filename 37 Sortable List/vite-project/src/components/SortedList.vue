

<script setup lang="ts">
import BOOKS from '../ts/books';
import ListItem from './ListItem.vue';
import {reactive,onMounted, ref} from 'vue'

const RANDOM_BOOKS:string[] = reactive([])
const checkedResult:boolean[] = reactive([])
const checked = ref(false)

onMounted(()=>{
  const tmp = BOOKS.map(book => {return{name:book,val:Math.random()}})
       .sort((a,b)=>a.val-b.val)
       .map(v => v.name)
  RANDOM_BOOKS.push(...tmp)
})

function swap(srcIdx:number,targetIdx:number){
  console.log("parent component receive",srcIdx,targetIdx);
  const bookname = RANDOM_BOOKS[srcIdx]
  RANDOM_BOOKS[srcIdx] = RANDOM_BOOKS[targetIdx]
  RANDOM_BOOKS[targetIdx] = bookname 
}


function checkOrder(){
  for(let i = 0; i < BOOKS.length;i++){
    checkedResult[i] = BOOKS[i] === RANDOM_BOOKS[i]
  }
  checked.value = true
}

</script>

<template>
    <h2 class="title">My 10 Best Books</h2>
    <small class="subtitle">拖拽到指定的排名顺序(在我心目中好的书籍)</small>
    <ol class="books-container" id="books-container">
      <ListItem v-for="(book,idx) in RANDOM_BOOKS"
        :book="book"
        :idx="idx"
        :key="idx"
        :class="checked ? checkedResult[idx]? 'right':'error' :''"
        @change="swap">
      </ListItem>
    </ol>
    <button class="check-btn" @click="checkOrder">
      Check Order
      <font-awesome-icon icon="fa-solid fa-paper-plane" />
    </button>
</template>

<style lang="scss" scoped>

@import '../scss/_common_variables';
.title{
  margin: 20px 0 30px;
}

.books-container{
  margin-top: 30px;
  list-style: none;
}

.check-btn{
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: $third-color;
  cursor: pointer;

  &:active{
    transform: scale(0.98);
  }
}
</style>
