<template>
  <div id="add_card">
    <Card :card="newCard" />
    <form>
      <div id="card_number">
        <h4>Card number</h4>
        <input
          class="cardNumber"
          type="text"
          v-model.number="newCard.cardNumber"
          name="cardNumber"
          placeholder="xxxx xxxx xxxx xxxx"
          maxlength="16"
          required
        />
        <span v-if="invalid.cardNumber" class="error">Only 16 numbers are accepted</span>
      </div>
      <div id="cardholder_name">
        <h4>Cardholder name</h4>
        <input
          class="cardHolderName"
          type="text"
          v-model.trim="newCard.cardHolderName"
          name="CardHolderName"
          placeholder="Firstname and Lastname"
          maxlength="30"
          required
        />
        <span v-if="invalid.cardHolderName" class="error">Only letters are accepted</span>
      </div>
      <div id="ccv_valid">
        <div id="card_valid_thru">
          <h4>Valid thru</h4>
          <input class="valid" v-model.number="newCard.validThru" name="validThru" required />
          <span v-if="invalid.validThru" class="error">Dates format have to be MM/YY</span>
        </div>
        <div id="ccv">
          <h4>CCV</h4>
          <input class="ccv" v-model.number="newCard.ccv" name="ccv" required maxlength="3" />
          <span v-if="invalid.ccv" class="error">CCV format needs to be 3 digits</span>
        </div>
      </div>
      <div id="vendor">
        <h4>Vendor</h4>
        <select v-model="newCard.vendor" class="vendor">
          <option>bitcoin</option>
          <option>ninja</option>
          <option>blockchain</option>
          <option>evil</option>
        </select>
        <span v-if="invalid.vendor" class="error">You need to choose a vendor</span>
      </div>
      <div id="add_card">
        <button class="add_card" v-on:click="createCard">ADD CARD</button>
      </div>
    </form>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardForm",
  components: { Card },
  data: () => {
    return {
      newCard: {
        cardNumber: "xxxx xxxx xxxx xxx",
        cardHolderName: "Firstname and Lastname",
        validThru: "mm/yy",
        ccv: "",
        vendor: "bitcoin",
        chip: "dark"
      },
      invalid: {
        cardNumber: false,
        cardHolderName: false,
        validThru: false,
        ccv: false,
        vendor: false
      }
    };
  },
  watch: {
    selected(value) {
      this.$emit("cardImg", value);
    },
    cardNumber() {
      if (
        this.validCardNumber(this.newCard.cardNumber) == true ||
        this.newCard.cardNumber === ""
      ) {
        this.invalid.cardNumber = false;
      } else {
        this.invalid.cardNumber = true;
      }
    },
    cardHolderName() {
      if (
        this.validName(this.newCard.cardHolderName) == true ||
        this.newCard.cardHolderName === ""
      ) {
        this.invalid.cardHolderName = false;
      } else {
        this.invalid.cardHolderName = true;
      }
    },
    validThru() {
      if (this.validateThru(this.newCard.validThru) == true) {
        this.invalid.validThru = false;
      } else {
        this.invalid.validThru = true;
      }
    },
    ccv() {
      if (this.validCcv(this.newCard.ccv) == true) {
        this.invalid.ccv = false;
      } else {
        this.invalid.ccv = true;
      }
    },
    vendor() {
      if (this.newCard.vendor === "") {
        this.invalid.vendor = true;
      } else {
        this.invalid.vendor = false;
      }
    }
  },
  methods: {
    createCard() {
      this.$emit("cardAdded", {
        cardNumber: this.newCard.cardNumber,
        cardHolderName: this.newCard.cardHolderName,
        validThru: this.newCard.validThru,
        ccv: this.newCard.ccv,
        vendor: this.newCard.vendor
      });
      this.$router.push("/");
    },
    validCardNumber(cardNumber) {
      const pattern = /^[0-9]{16}/;
      return pattern.test(cardNumber);
    },
    validName(cardHolderName) {
      const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
      return pattern.test(cardHolderName);
    },
    validateThru(validThru) {
      const pattern = /^(0[1-9]|1[012])\/\d{2}$/;
      return pattern.test(validThru);
    },
    validCcv(ccv) {
      const pattern = /^[0-9]{3}/;
      return pattern.test(ccv);
    }
  }
};
</script>

<style>
#add {
  height: 100vh;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: "PT Mono";
}
#ccv_valid {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
input {
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
}
input::placeholder {
  font-size: 14px;
  font-family: "PT Mono";
  text-align: center;
}
input:focus {
  color: black;
}
.add_card {
  background-color: #000000;
  color: #ffffff;
  margin: 25px;
  transition: 0, 5;
}
.add_card:hover {
  background-color: #ffffff;
  color: #000000;
}
.ccv,
.valid {
  width: 125px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
}
select {
  width: 380px;
  height: 34px;
  border-radius: 8px;
  border-color: rgba(0, 0, 0, 0.8);
  border-width: 1px;
}
.cardNumber,
.cardHolderName {
  width: 380px;
  height: 44px;
}
h4 {
  text-align: left;
}
p {
  font-size: 12px;
  line-height: 13px;
}
span {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px;
}
.error {
  text-align: center;
  font-size: 14px;
  color: red;
}
</style>