<template>
    <section id=card_vue :class="['card', chip, card.vendor]">
        <div class="view_card">
            <img class="chip" :src="require(`../assets/chip-${chip}.svg`)" />
            <img class="logo_vendor" :src="require(`../assets/vendor-${card.vendor}.svg`)" /> 
        </div>
        <div class="number_card">
            <h2> {{card.cardNumber}} </h2>
        </div>
        <div class="card_holder_name">
            <p>Cardholder name</p>
            <h3> {{card.cardHolderName}} </h3>
        </div>
        <div id="valid_thru">
            <p>Valid thru</p>
            <h3> {{card.validThru}} </h3>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Card',
    props: {
        card: Object
    },
    data: () => {
        return {
            chip: "dark", 
            numberOfCard: "xxxx xxxx xxxx xxx",
            holderOfCard: "Firstname and Lastname",
            validOfCard: "mm/yy"
        };
    },
    computed: {
        cardNumber() {
            console.log(this.card)
            if (this.card && this.card.cardNumber) {
                let cardNumber = this.card.cardNumber;
                cardNumber = cardNumber.match(/.{1,4}/g);
                return cardNumber.join(" ");
            } else {
                return this.numberOfCard;
            }
        },
        cardHolderName() {
            if (this.card && this.card.cardHolderName) {
                return this.card.cardHolderName;
            } else {
                return this.holderOfCard;
            }
        },
        validThru() {
            if (this.card && this.card.validThru) {
                return this.card.validThru;
            } else {
                return this.validOfCard;
            }
        },
        vendor() {
            if (this.card && this.card.vendor) {
                return this.card.vendor;
            } else {
                return this.img;

            }
        },
        isChip() {
            if (this.card && this.card.vendor == "bitcoin") {
                return "light";
            } else {
                return "dark";
            } 
        }
    }
}
</script>

<style>
#card_vue {
    width: 382px;
    height: 241px;
    position: relative;
    border-radius: 10px;
    font-family: "PT Mono";
    margin: 10px;
}
.chip {
    position: absolute;
    left: 10%;
    top: 10%;
}
.logo_vendor {
    position: absolute;
    right: 10%;
    top: 10%;
}
.card_holder_name p {
    position: absolute;
    bottom: 50%;
    left: 0%;
}
.card_holder_name {
    position: absolute;
    bottom: 0%;
    left: 5%;
}
#valid_thru p {
    position: absolute;
    bottom: 50%;
    right: 7%;
}
#valid_thru {
    position: absolute;
    bottom: 0%;
    right: 7%;
}
.number_card {
    margin-top: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
}
.img {
    max-width: 40px;
    max-height: 40px;
}
.bitcoin {
    background: #ffae34;
    color: black;
}
.evil {
    background: #f33355;
    color: white;
}
.blockchain {
    background: #8b58f9;
    color: white;
}
.ninja {
    background: #222222;
    color: white;
}
.dark {
    color: black;
    text-shadow: -0.5px 0.5px 0px #3a3a3a;
}
.light {
    color: white;
    text-shadow: 0.5px 0.5px 0px #868686, -0.5px -0.5px 0px #868686;
}
</style>