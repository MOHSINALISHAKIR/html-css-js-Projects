  let api = "https://api.realinspire.live/v1/quotes/random";
  const  create = document.querySelector("#new")
  const quote = document.querySelector("blockquote")
  const user = document.querySelector("span")

  create.addEventListener("click",async()=>{
    const response = await fetch(api)
    let data = await response.json();
    quote.innerHTML=data[0].content;
    user.innerHTML=data[0].author
    console.log(data)


  })

  