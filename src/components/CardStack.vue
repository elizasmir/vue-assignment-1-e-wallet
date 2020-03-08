<template>
    <div id=card_stack>
        <Card class="card" 
        v-for="(card, index) in cards"
        :card="card"
        :key="index"
        v-bind:class="selectedCardIndex == index ? 'selected' : ''"
        @click.native="chooseCard(index)" />
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    name: 'CardStack',
    props: {
        cards: Array
    },
    data: () => {
        return {
            selectedCardIndex: 0
        }
    },
    components: { Card },
    methods: {
        chooseCard(index) {
            this.selectedCardIndex = index;
            this.$emit("chooseCard", index);
        }
    }
}
</script>

<style>
.card {
    cursor: pointer;
}
.selected {
    border: 5px solid black;
}
</style>