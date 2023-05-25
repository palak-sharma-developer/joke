Promises

const joKe = document.querySelector('#joke')
const jkBtn= document.getElementById('btn')

const generateJoke = () => {

    const setheader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setheader)
        .then((res) => res.json() )
        .then((data) => {
        joKe.innerHTML = data.joke ;
        }).catch((error) => {
            console.log(error);
     })
}



jkBtn.addEventListener('click', generateJoke)
generateJoke();



USING ASYNC _AWAIT

const joKe = document.querySelector('#joke')
const jkBtn = document.getElementById('btn')

const generateJoke = async () => {
    
    try {
 const setheader = {
     headers: {
         Accept: "application/json"
     }
 }
         const res = await fetch('https://icanhazdadjoke.com', setheader)
         const data = await res.json()
        joKe.innerHTML = data.jok e ;
    }catch(error){
        console.log(`the error is ${error} `)
}
    
      
}

jkBtn.addEventListener('click', generateJoke)
generateJoke();

