
const counter = document.querySelector("p")

let count = 0;
function random(){
  count = Math.floor(Math.random() * 100)
  console.log(count)
  counter.innerHTML = count
  if(count === 20){
    alert("hurrey")
  }
}

  function increment() {
    count = count + 1
    console.log("count ka value hain: ", count)
    counter.innerHTML = count
    console.log("inner html ka value hain: ", counter.innerHTML)
    localStorage.setItem("count", count)
  }

  function decrement() {
    if(count > 0){
      count = count - 1
    console.log("count ka value hain: ", count)
    counter.innerHTML = count
    console.log("inner html ka value hain: ", counter.innerHTML)
    localStorage.setItem("count", count)
    }
  }
  

  const incrementbtn = document.getElementById("increment").addEventListener("click" , increment)
  const decrementbtn = document.getElementById("decrement").addEventListener("click" , decrement)
  document.getElementById("random").addEventListener("click" , random)