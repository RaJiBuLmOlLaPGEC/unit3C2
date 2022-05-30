// Add the coffee to local storage with key "coffee"
// let api="https://masai-mock-api.herokuapp.com/coffee/menu"
fetch('https://masai-mock-api.herokuapp.com/coffee/menu').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let alldata=completedata.menu.data;
    // console.log(alldata);
    alldata.map(function(el)
    {
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let title=document.createElement("p");
        title.innerText=el.title;
        let price=document.createElement("p");
        price.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Add to Bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click",function(){
            bucketFn(el);
        });
        let bucketData=JSON.parse(localStorage.getItem("coffee")) || [];
        function bucketFn(el)
        {
            bucketData.push(el);
            document.querySelector("#coffee_count>h3").innerText=bucketData.length;
            localStorage.setItem("coffee",JSON.stringify(bucketData));
        }
        box.append(img,title,price,btn);
        document.querySelector("#menu").append(box);
        
    });
}) .catch((err)=>{
    console.log(err);
})

// let bucketData=JSON.parse(localStorage.getItem("coffee")) || [];
