

<script setup lang="ts">
import Card from '@/components/Card.vue'
import IMAGES from '../ts/images'
import { onMounted, Ref, reactive,ref} from 'vue'

const cardRefs:Ref<InstanceType<typeof Card>[]> = ref([])
const RANDIMAGES:string[] = reactive([])

const isClickable = ref(true)
const activeCardIds:number[] = []
let matchCounter = 0

fillRandomImage()

onMounted(()=>{
    // 不能写在这，因为v-for根据RANDIMAGES渲染，而这里onMounted，是在页面渲染之后才调用
    //RANDIMAGES.push(...shuffle()) 
    console.log("---------------",cardRefs.value[0]);
})


function fillRandomImage(){

    let tmp = [
        ...[...IMAGES].sort(()=>Math.random()-0.5),
        ...[...IMAGES].sort(()=>Math.random()-0.5)
    ]
    RANDIMAGES.splice(0,RANDIMAGES.length)
    RANDIMAGES.push(...tmp)
}

function handleActiveCard(idx:number){
    activeCardIds.push(idx)
    if(activeCardIds.length === 2){
        isClickable.value = false
        matchCard()
    }
}

function matchCard(){
    let id1 = activeCardIds[0]
    let id2 = activeCardIds[1]
    let cardOne = getCardRefById(id1)
    let cardTwo = getCardRefById(id2)
    if(RANDIMAGES[id1] === RANDIMAGES[id2]){
        // match
        matchCounter++
        if(matchCounter === 8){
            // reset data
            matchCounter = 0
            setTimeout(()=>{
                cardRefs.value.forEach(card => card.closeCard())
                fillRandomImage()
            },1000)        
        }
        isClickable.value = true
        activeCardIds.splice(0,activeCardIds.length)
    }else{
        // not match
        setTimeout(()=>{
            cardOne.shakeCard()
            cardTwo.shakeCard()
        },400)

        setTimeout(()=>{
            cardOne.closeCard()
            cardTwo.closeCard()
            activeCardIds.splice(0,activeCardIds.length)
            isClickable.value = true
        },1000)

    }
}

// 因为cardRefs，在vue3不能确保顺序
function getCardRefById(id:number){
    return cardRefs.value.find(card => {
        if(card.id === id)
            return true
    })
}

</script>


<template>
  <div class="container">
    <Card v-for="(image,idx) in RANDIMAGES"
        :img-url="image"
        :idx="idx"
        :key="idx"
        :isClickable="isClickable"
        @active="handleActiveCard"
        ref="cardRefs">
    </Card>
  </div>
</template>


<style lang="scss" scoped>
@import '@/scss/__common_variables.scss';
.container{
    background-color: $second-color;
    height: 400px;
    width: 400px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(255,255,255,0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>