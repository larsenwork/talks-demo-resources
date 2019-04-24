// Setting up Firestore
firebase.initializeApp({
  authDomain: 'larsentalks.firebaseapp.com',
  projectId: 'larsentalks',
})

// Vue app
const app = new Vue({
  el: '#app',
  firestore: {
    cphuxState: firebase
      .firestore()
      .collection('cphux')
      .doc('state'),
  },
  data: {
    photoCount: 0,
  },
  methods: {
    updateState() {
      this.photoCount++
      this.$firestore.cphuxState.update({ photoCount: this.photoCount })
    },
  },
  mounted() {
    // Reset Firestore
    this.$firestore.cphuxState.update({ photoCount: 0 })

    // Camera stuff
    const videoSettings = {
      video: { facingMode: 'environment' },
      audio: false,
    }
    navigator.mediaDevices.getUserMedia(videoSettings).then(stream => {
      this.$refs.camera.srcObject = stream
    })
  },
})
