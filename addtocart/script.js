import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseUrl :"https://cartisitic-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database,"movies")
const inputEl = document.getElementById("input-field")
const addEl = document.getElementById("add-button")
addEl.addEventListener("click",()=>{
    let inputValue = inputEl.value;
    push(moviesInDB,inputValue)
    console.log(`${inputValue} added to database`)
})