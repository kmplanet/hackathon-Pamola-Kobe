

async function fetchData() {
    // const quote = document.body.createElement("h3")
    // const theAuthor = document.body.createElement("h3")
    const quote = document.createElement('h1');
    quote.innerHTML = 'hello'
    document.querySelector('body').appendChild(quote);


    const res = await fetch ("https://api.quotable.io/random");
    const record = await res.json();
    if (response.ok){
        console.log('testing if API works, Author: ', record.author)
        quote.textContent = 'hello'
        theAuthor.textContent = 'hi'
        // 'record.author''
    }

    
    // document.getElementsByClassName("title").innerHTML=record.data[0]._id;
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}

    const newQButton = document.getElementById("newQuoteButton")
    newQButton.addEventListener("click", fetchData())
    
    fetchData();
// const testing = document.querySelector('head')
// console.log(testing)

