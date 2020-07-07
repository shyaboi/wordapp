// input word variable
const ward = ''

function reLd() {
    
    location.reload();
}





document.getElementById('strInput').onkeydown = function(e){
    if(e.keyCode == 13){
      // submit
      
      console.log(ward)
      rev()
      thesAPI()
      dicAPI()
      sorte()
      revSorte()
      letterCount()

    //   anaAPI()
      return ward
    }
 };

function thesAPI(){
    let ward = document.getElementById('strInput').value
    fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${ward}?key=87734587-fa53-4551-a401-d89710c37236`)
    .then(response => response.json())
    // .then(data => console.log(data[0].meta.syns))
    .then(data => document.getElementById('apiSyn').innerHTML = " " + data[0].meta.syns);

}

function dicAPI(){
    let ward = document.getElementById('strInput').value
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${ward}?key=8b622cbb-e297-4039-94ee-02c9ac58ffc0`)
    .then(response => response.json())
    // .then(data => console.log(data[0].shortdef))
    .then(data => document.getElementById('apiDic').innerHTML = "<p>" + data[0].shortdef + " " + "<h4>Definition 2: </h4>" + data[1].shortdef + "</p>");
}

// function anaAPI(){
//     let ward = document.getElementById('strInput').value
//     fetch(`http://www.anagramica.com/best/:${ward}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

function letterCount() {
    let ward = document.getElementById('strInput').value
    word = ward.length
    // console.log(word)
    document.getElementById("letterCount").innerHTML = `<h2>${word}</h2>`

}


function sorte() {
    let ward = document.getElementById('strInput').value
    const word = ward
    const sortWord = word.toLowerCase().split("").sort().join("");
    // console.log(sortWord)
    document.getElementById("sorted").innerHTML = `${sortWord}`

}

function revSorte() {
    let ward = document.getElementById('strInput').value
    const word = ward
    const sortWord = word.toLowerCase().split("").sort().reverse("").join("");
    // console.log(sortWord)
    document.getElementById("revSorted").innerHTML = `${sortWord}`

}

 function rev() {
    let ward = document.getElementById('strInput').value
    console.log(ward)
    const word = ward
  const spWord = word.toLowerCase().split("").reverse("").join("");
  const revWord = spWord.charAt(0).toUpperCase() + spWord.slice(1)
  console.log();
  if (word === spWord) {
      document.getElementById("pal").innerHTML = "pallen"
      document.getElementById("outputStrRev").innerHTML = `${revWord}`

  }
  else{
    document.getElementById("pal").innerHTML = "noooot"
    document.getElementById("outputStrRev").innerHTML = `${revWord}`

  }
}
