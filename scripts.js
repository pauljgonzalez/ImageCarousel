const upperSection = document.querySelector(".carouselUpperSection")
const upperButtons = document.querySelectorAll(".selectImage")
const previousButton = document.querySelector("#previousImage")
const nextButton = document.querySelector("#nextImage")
const lowerContainer = document.querySelector(".lowerContainer")

const pictureArray = [
    "./images/bears.jpg",
    "./images/birds.jpg",
    "./images/cats.jpg",
    "./images/fishes.jpg",
    "./images/monkeys.jpg",
    "./images/tiger.jpg",
    "./images/wolfs.jpg",
]

const pictureArrayLength = pictureArray.length - 1
let currentImageIndex = 0
upperSection.style.backgroundImage = `url('${pictureArray[0]}')`
upperButtons.forEach((button) =>{
    button.addEventListener("mouseenter",()=>{
        button.style.opacity = 1
    })
    button.addEventListener("mouseleave",()=>{
        button.style.opacity = .5
    })
} )
previousButton.addEventListener("click",() => {
    if(currentImageIndex === 0){
        currentImageIndex = pictureArrayLength
        updateCurrentImageUpper(currentImageIndex)
    }else{
        currentImageIndex -=1
        updateCurrentImageUpper(currentImageIndex)
    }
    checkCurrentImage()
})
nextButton.addEventListener("click",() => {
    if(currentImageIndex === pictureArrayLength){
        currentImageIndex = 0
        updateCurrentImageUpper(currentImageIndex)
    }else{
        currentImageIndex +=1
        updateCurrentImageUpper(currentImageIndex)
    }
    checkCurrentImage()
})
function updateCurrentImageUpper(image){
    upperSection.style.transition = "background-image 0.6s ease";
    upperSection.style.backgroundImage = `url('${pictureArray[image]}')`;
    setTimeout(() => {
        upperSection.style.transition = "";
      }, 600);
}
function createDiv(classInput){
    const div = document.createElement("div")
    div.className = classInput
    return div
    
}
function createLowerContainer(){
    const frag = new DocumentFragment()
    pictureArray.forEach((picture,index) =>{
        const container = createDiv("imageContainer")
        const image = createDiv("image")
        image.style.backgroundImage = `url('${picture}')`
        image.classList.add(index)
        container.appendChild(image)
        frag.appendChild(container)
    })
    lowerContainer.appendChild(frag)
}
createLowerContainer()
const imageClassAll = document.querySelectorAll(".image")

function checkCurrentImage(){
    imageClassAll.forEach((image,index) => {
        image.addEventListener("click",()=>{
            currentImageIndex = index;
            updateCurrentImageUpper(currentImageIndex)
            checkCurrentImage()
        })
        image.classList.forEach((className) =>{
            if(className == currentImageIndex){
                image.style.opacity = 1
                return
            }
            else{image.style.opacity =.1}
        })
    })
}
checkCurrentImage()

function slideshowtimer(){
    if(currentImageIndex === pictureArrayLength){
        currentImageIndex = 0
        updateCurrentImageUpper(currentImageIndex)
    }else{
        currentImageIndex +=1
        updateCurrentImageUpper(currentImageIndex)
    }
    checkCurrentImage()
}
setInterval(slideshowtimer, 5000)