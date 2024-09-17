let cont = document.getElementById("container");
let b1 = document.getElementById("num1");
let b2 = document.getElementById("num2");
let b3 = document.getElementById("num3");
let b4 = document.getElementById("num4");
let b5 = document.getElementById("num5");
let b6 = document.getElementById("num6");
let b7 = document.getElementById("num7");
let b8 = document.getElementById("num8");
let b9 = document.getElementById("num9");
let b10 = document.getElementById("num10");

function getInfo(userId) {

  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
      if (cont.childElementCount > 1) {
        cont.innerHTML = "";
      }
    let posts = request.response;
    for (post of posts) {
      let x = document.createElement("h1");
      let y = document.createElement("p");
      let z = document.createElement("div");
      z.setAttribute("class", "bg-slate-400 p-4 rounded-lg");
      x.innerHTML = post.title + "<br> <br>";
      
      y.innerHTML = post.body + "<br> <br>";
      z.appendChild(x);
    
      z.appendChild(y);
      cont.appendChild(z)
    }
  };
}
