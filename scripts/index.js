// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



var url = (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

fetch(url)
.then(function(res){
   res.json()
.then(function(res){

    apiData(res)
    console.log("res :",res);


    
})   

})

.catch(function(err){
    console.log(err)
})


function apiData(res){

    res.articles.map(function(el){
        let div = document.createElement("div")
        div.setAttribute("class","card")


        let news = document.getElementById("news");

        title = document.createElement("p")
        title.innerText = el.title

        url = document.createElement("img")
        url.src = el.url

        image = document.createElement("img")
        image.src = el.urlToImage

        console.log(el.urlToImage)

        para = document.createElement("p")
        para.innerText = el.description

        

        div.append(image,title,url,para)

        news.append(div)

    })


}

// description



// title: "Explained: States vs Centre on fuel taxes petrol diesel price hike - The Indian Express"
// url: "https://indianexpress.com/article/explained/states-vs-centre-on-fuel-taxes-petrol-diesel-price-hike-7892286/"
// urlToImage: