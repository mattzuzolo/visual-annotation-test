let myDiv = document.getElementById("my-div")

let mousePosition = {
    xVal: "",
    yVal: ""
}

myDiv.addEventListener("click", function(){
  console.log(event)

  let myElement = document.createElement('div');
  myDiv.append(myElement)

  mousePosition.xVal = event.clientX
  mousePosition.yVal = event.clientY

  myElement.id = 'my-element';
  document.getElementById('my-element').style.position = "fixed";
  document.getElementById('my-element').style.top = mousePosition.yVal +"px"; //or whatever
  document.getElementById('my-element').style.left = mousePosition.xVal +"px"; // or whatever


})





// var d = document.getElementById('yourDivId');
