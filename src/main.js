import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'


firebase.child('notes').set([
  {title: 'Hello world', content: 'Lorem ipsum'}
])


firebase.child('notes').on('value', (snapshot) => {
  let notes = snapshot.val()
  console.log(notes)
  window.alert(notes[0].title)
})
