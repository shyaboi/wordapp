const ward = ''
document.getElementById('strInput').onkeydown = function(e){
    if(e.keyCode == 13){
      // submit
      
      console.log(ward)
      rev()
      return ward
    }
 };



function rev() {
    let ward = document.getElementById('strInput').value
    console.log(ward)
    const word = ward
  const spWord = word.split("").reverse("").join("");
  console.log(spWord);
  if (word === spWord) {
      document.getElementById("pal").innerHTML = "pallen"
      document.getElementById("outputStrRev").innerHTML = `${spWord}`

  }
  else{
    document.getElementById("pal").innerHTML = "noooot"
    document.getElementById("outputStrRev").innerHTML = `${spWord}`

  }
}
