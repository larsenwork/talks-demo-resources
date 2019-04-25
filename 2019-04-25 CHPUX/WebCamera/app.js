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
  },
  firestore: {
    cphuxState: firebase
      .firestore()
      .collection('cphux')
      .doc('state'),
  },
  methods: {
    takePic() {
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
