<template>
    <div>
        Welcome, <b class="text-muted">{{user.email}}</b>
        <p>
            <button @click="logout">Logout</button>
        </p>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'home-page',
    data () {
        return {
            user: {}
        }
    },
    mounted () {
        const { currentUser } = firebase.auth();
        this.user = currentUser;
    },
    methods: {
        logout () {
            firebase.auth().signOut();
            this.$router.replace('/')
        }
    }
    
}
</script>

<style scoped>
    .text-muted {
        color: gray;
    }
</style>
