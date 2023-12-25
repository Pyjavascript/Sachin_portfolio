(() => {
    let menu = document.querySelector("#inner-r3"),
    nav = document.querySelector("nav"),
    right = document.querySelector("#right");
    let i = false;
    menu.addEventListener("click",() => {
        if(i == false){
            nav.style.background = "#d7f066";
            right.style.display = "flex";
            i = true;
        }else if(i == true){
            right.style.display = "none";
            nav.style.background = "#fff";
            i = false;
        }
    })
})
();

(() => {
    let project_box = document.querySelector("#project-box");
    let heads = [
        "Chat Dashboard",
        "To Do List Dashboard",
        "NFT Marketplace Dashboard"
    ]
    for(let i = 0;i < 3;i++){
        // outer box 
        let box = document.createElement("div")
        box.id = "box"
        // img box
        let img_box = document.createElement("div")
        img_box.id = "img"
        box.append(img_box)
    
        // img txt
        let img_txt = document.createElement("div")
        img_txt.id = "img-txt"
        let h2 = document.createElement("h2")
        h2.innerText = heads[i]
        img_txt.append(h2)
        let img_txt_div = document.createElement("div")
        let p1 = document.createElement("p")
        p1.innerText = "UI/UX"
        let p2 = document.createElement("p")
        p2.innerText = "Product Design"
        img_txt_div.append(p1)
        img_txt_div.append(p2)
        img_txt.append(img_txt_div)
    
    
        box.append(img_txt)
    
        project_box.append(box)
    }
    
    console.log(box)
})
();