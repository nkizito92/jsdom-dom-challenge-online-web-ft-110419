  let count = document.querySelector("#counter");
  
  // Increase and decrease count
  let minus = document.querySelector("#minus");
  let plus = document.querySelector("#plus");
  
  let pause = document.querySelector("#pause")
  let total = 0;
  plus.addEventListener("click", () => {
   total++
   count.innerHTML = total;
  });
  
  minus.addEventListener("click", () => {
   total--
   count.innerHTML = total;
  });
  
  // counter
  
 let timer = setInterval( () => {count.innerHTML = total++  }, 1000);

  // stop interval 
  pause.addEventListener("click", () => clearInterval(timer));
  
  // adding comments 
  let comments = document.querySelector(".comments");
  let textField = document.querySelector("#comment-input");
  let submitted = document.querySelector("#submit");
  
  submitted.addEventListener("click", (e) => {
    comments.innerHTML += `<p>${textField.value}</p> </br>`;
    e.preventDefault()
  });
  
  //Likes
  let heart = document.querySelector("#heart");
  
  let likes = document.querySelector("#likes");