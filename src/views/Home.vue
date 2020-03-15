<template>
  <div id="home">
    <div id="top">
      <Top msg="E-Wallet" />
    </div>

    <div id="active_card">
      <Card v-if="cards[activCardIndex] != undefined" :card="cards[activCardIndex]" />
      <button @click="remove">REMOVE THIS CARD</button>
    </div>

    <div id="cards">
      <CardStack :cards="cards" @chooseCard="chooseCard" />
    </div>

    <div id="add_new_card">
      <button @click="add">ADD A NEW CARD</button>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  data: () => {
    return {
      cards: [],
      activCard: {},
      activCardIndex: 0
    };
  },
  created() {
    const defaultCard = [
      {
        cardNumber: "1234123412341234",
        cardHolderName: "Lizaveta Smirnova",
        validThru: "12/22",
        CCV: "123",
        vendor: "bitcoin"
      },
      {
        cardNumber: "1234123412341234",
        cardHolderName: "Vlad Smirnova",
        validThru: "12/22",
        CCV: "123",
        vendor: "blockchain"
      },
      {
        cardNumber: "1234123412341234",
        cardHolderName: "Oskar Smirnova",
        validThru: "12/22",
        CCV: "123",
        vendor: "evil"
      }
    ];
    if (localStorage.getItem("cards") === null) {
      localStorage.setItem("cards", JSON.stringify(defaultCard));
    } else {
      this.cards = JSON.parse(localStorage.getItem("cards"));
    }
  },
  methods: {
    add() {
      this.$router.push("/addcards");
    },
    remove() {
      this.cards.splice(this.activCardIndex, 1);
      localStorage.setItem("cards", JSON.stringify(this.cards));
      this.activCardIndex = 0;
    },
    chooseCard(index) {
      this.activCardIndex = index;
    }
  },
  components: { Top, Card, CardStack },
  mounted() {
    if (localStorage.getItem("cards")) {
      try {
        this.cards = JSON.parse(localStorage.getItem("cards"));
      } catch {
        localStorage.removeItem("cards");
      }
    }
  }
};
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  width: 282px;
  height: 52px;
  margin: 10px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
  text-transform: uppercase;
  cursor: pointer;
}
button:hover {
  background-color: #000000;
  color: #ffffff;
}

h2,
h3,
h4,
p {
  font-style: normal;
  font-weight: normal;
  color: #000000;
  text-transform: uppercase;
}
h2 {
  font-size: 29px;
  line-height: 32px;
  letter-spacing: 0.03em;
}
h3 {
  font-size: 18px;
  line-height: 20px;
}
p,
h4 {
  font-size: 12px;
  line-height: 13px;

  color: rgba(0, 0, 0, 0.8);
}
</style>
