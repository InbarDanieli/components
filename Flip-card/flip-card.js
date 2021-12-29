const InnerCard = document.getElementById("card-inner")
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back")
const openB = document.getElementById("OpenBack")


openB.addEventListener("click", (event) => {
    InnerCard.classList.add("OpenBack")
})

cardBack.addEventListener("mouseleave", (event)=>{
    InnerCard.classList.remove("OpenBack")
})

InnerCard.addEventListener("mousemove", (event)=>{
    InnerCard.classList.add("makeBigger")
})