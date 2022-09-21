<template>
  <form @submit.prevent="submitForm">
    <div class="form-wrapper">
      <label for="username">Dein Name</label>
      <input
        type="text"
        id="username"
        name="username"
        v-model.trim="username"
        placeholder="Max Mustermann"
        @blur="validateInput"
        :class="{ invalid: usernameValid === 'invalid' }"
      />
    </div>
    <p v-if="usernameValid == 'invalid'">Bitte trage einen Nutzernamen ein</p>
    <div class="form-wrapper">
      <label for="age">Dein Alter</label>
      <input
        type="number"
        id="age"
        name="age"
        v-model.number="userAge"
        ref="ageInput"
      />
    </div>
    <div class="form-wrapper">
      <label for="fav-app">Lieblingsapp</label>
      <select name="fav-app" id="fav-app" v-model="userApp">
        <option value="whatsapp">WhatsApp</option>
        <option value="instagram">Instagram</option>
        <option value="notion">Notion</option>
        <option value="other">Andere...</option>
      </select>
    </div>
    <div class="form-wrapper">
      <h3>Worin bist du interessiert</h3>
      <div>
        <input
          type="checkbox"
          id="interest-webdev"
          name="interest"
          v-model="userInterest"
          value="webdevelopment"
        />
        <label for="interest-webdev">Webdevelopment</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="interest-mobile"
          name="interest"
          v-model="userInterest"
          value="mobile-apps"
        />
        <label for="interest-mobile">Mobile Apps</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="interest-web3"
          name="interest"
          v-model="userInterest"
          value="web3"
        />
        <label for="interest-web3">Web 3.0</label>
      </div>
    </div>
    <div class="form-wrapper">
      <h3>Lernmedium</h3>
      <div>
        <input
          type="radio"
          id="learn-video"
          name="learn"
          v-model="userLearn"
          value="video"
        />
        <label for="learn-video">Video</label>
      </div>
      <div>
        <input
          type="radio"
          id="learn-blogs"
          name="learn"
          v-model="userLearn"
          value="blogs"
        />
        <label for="learn-blogs">Blogs</label>
      </div>
      <div>
        <input
          type="radio"
          id="learn-audio"
          name="learn"
          v-model="userLearn"
          value="audio"
        />
        <label for="learn-projects">Audio</label>
      </div>
    </div>
    <div class="form-wrapper">
      <bewertung-form v-model="bewertung"></bewertung-form>
    </div>
    <div class="form-wrapper">
      <input type="checkbox" id="agb" name="agb" v-model="agb" />
      <label for="agb">AGB akzeptieren</label>
    </div>
    <div>
      <button @click="submitForm">Abschicken</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "TheForms",
  data() {
    return {
      username: "",
      userAge: null,
      userApp: "whatsapp",
      userInterest: [],
      userLearn: null,
      agb: false,
      usernameValid: "unklar",
      bewertung: null,
    };
  },
  methods: {
    submitForm() {
      if (this.username == "") {
        this.validateInput();
      } else {
        console.log("Name " + this.username);
        this.username = "";
        // console.log("User Age: " + this.$refs.userAge.value);
        console.log("Alter");
        console.log(this.userAge);
        //console.log(this.userAge + 5);
        //console.log(this.$refs.ageInput.value + 5);
        this.userAge = null;
        console.log("Lieblingsapp: " + this.userApp);
        console.log("------------------");
        console.log("Checkboxes: ");
        console.log(this.userInterest);

        for (var i = 0; i < this.userInterest.length; i++) {
          console.log(this.userInterest[i]);
        }

        console.log("Radio Buttons: ");
        console.log(this.userLearn);
        this.userInterest = [];
        this.userLearn = null;

        if (this.agb == false) {
          //  alert("You must accepts the terms");
          console.log("Agbs wurden nicht akzeptiert");
        } else {
          console.log("AGB's wurde akzeptiert");
        }

        this.agb = false;

        console.log(this.bewertung);
        this.bewertung = null;
      }
    },
    validateInput() {
      if (this.username == "") {
        this.usernameValid = "invalid";
        return;
      } else {
        this.usernameValid = "valid";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 20px;
  width: fit-content;
  min-width: 400px;
}

label,
input {
  display: block;
  width: 100%;
  text-align: left;
}

input {
  margin-bottom: 4px;
  display: inline-block;
}

.invalid {
  border-color: red;
}
</style>
