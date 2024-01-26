async function fetchData() {
    const res=await fetch ("https://api.quotable.io/random");
    const record  =await res.json();
    document.getElementById("quote").innerHTML=record.content;
    document.getElementById("author").innerHTML=record.author;
}
fetchData();