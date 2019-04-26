// Setting up Firestore
firebase.initializeApp({
  authDomain: 'larsentalks.firebaseapp.com',
  projectId: 'larsentalks',
})

// Vue app
const app = new Vue({
  el: '#app',
  data: {
    photoCount: 0,
    showForm: false,
  },
  firestore: {
    cphuxState: firebase
      .firestore()
      .collection('cphux')
      .doc('state'),
  },
  mounted() {
    this.$firestore.cphuxState.onSnapshot(document => {
      this.photoCount = document.data().photoCount
      this.showForm = document.data().showForm
    })
  },
})
