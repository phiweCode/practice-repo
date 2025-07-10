let count = 0; 

function increaseCount()
{ 
    count++; 
    displayCount(); 
    checkCountValue();
}  

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function displayCount() 
{ 
    document.getElementById('countDisplay').innerHTML=count; 
} 

function resetFollowers () { 
     document.getElementById('countDisplay').innerHTML= 0 
     alert("Your Instagram followers have been reset!");
}