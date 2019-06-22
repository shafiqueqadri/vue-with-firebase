<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <p v-if="wait">Please wait...</p>
        <span>or go back to <router-link to="/login">login</router-link>.</span>
    </div>
</template>

 <script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: '',
            wait: false
        }
    },
    methods: {
        signUp: function() {
            this.wait = true;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.wait = false;
                    this.$router.replace('home')
                },
                (err) => {
                    this.wait = false;
                    alert('Oops. ' + err.message)
                }
            );
        }
    }
}
</script>

 <style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>