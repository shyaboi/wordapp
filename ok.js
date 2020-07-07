// input word variable
const ward = ''
document.getElementById('strInput').onkeydown = function(e){
    if(e.keyCode == 13){
      // submit
      
      console.log(ward)
      rev()
      api()
      return ward
    }
 };

function api(){
    let ward = document.getElementById('strInput').value
    fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${ward}?key=87734587-fa53-4551-a401-d89710c37236`)
    .then(response => response.json())
    // .then(data => console.log(data[0].meta.syns))
    .then(data => document.getElementById('apiSyn').innerHTML = data[0].meta.syns);
    
}

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
