let url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result=document.getElementById("result");
const btn=document.getElementById("search");


btn.addEventListener('click',()=>{
    let input=document.getElementById("input");
    if(input.value==''){
        alert("You must write something");
    }
    else{
        fetch(`${url}${input.value}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                result.innerHTML=`<div class="word">
                <h3 id="sample">${input.value}</h3>
                
                    <button id="sound" ">
                    <i class="fa-solid fa-volume-high" ></i>
                    </button>
                
            </div>
            <div class="details">
                <p id="pos">${data[0].meanings[0].partOfSpeech}</p>
                <p id="phonetics">/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning" id="meaning">
               <li>${data[0].meanings[0].definitions.length> 0 ? data[0].meanings[0].definitions[0].definition : " "}</li>
               <br>
               <li>${data[0].meanings[0].definitions.length> 1 ? data[0].meanings[0].definitions[1].definition : " "}</li>            
                <br>
                <li>${data[0].meanings[0].definitions.length> 2 ? data[0].meanings[0].definitions[2].definition : " "}</li>            
                <br>
                <li>${data[0].meanings[0].definitions.length> 3 ? data[0].meanings[0].definitions[3].definition : " "}</li>            
                <br>
                <li>${data[0].meanings[0].definitions.length> 4 ? data[0].meanings[0].definitions[4].definition : " "}</li>            
                <br>
            </p>
            <p class="word-example" id="example">
                ${data[0].meanings[0].definitions[0].example || " "}
            </p>`;
            })
  }
})
var typed=new Typed(".head",{
    strings:["MyDictionary"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});
