

<script setup lang="ts">
import BOOKS from '../ts/books';
import ListItem from './ListItem.vue';

</script>

<template>
    <h2 class="title">My 10 Best Books</h2>
    <small class="subtitle">拖拽到指定的排名顺序(在我心目中好的书籍)</small>
    <ol class="books-container" id="books-container">
      <ListItem v-for="(book,idx) in BOOKS"
        :book="book"
        :idx="idx"
        :key="idx">
      </ListItem>
    </ol>
    <button class="check-btn">
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
