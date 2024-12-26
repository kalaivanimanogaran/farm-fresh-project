const sliderimage = document.querySelector(".slider-image"),
firstImg = sliderimage.querySelectorAll("img")[0];
arrowIcons  = document.querySelectorAll(".slider-container i"); 


let isDragStart = false, prevPageX, prevScrollLeft; 
let firstImgWidth =firstImg.clientWidth + 14; 


const showHideIcons = () =>{
     let scrollWidth = sliderimage.scrollWidth - sliderimage.clientWidth;
    arrowIcons[0].style.display = sliderimage.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = sliderimage.scrollLeft == scrollWidth ? "none" : "block";

}

arrowIcons.forEach(icon =>{
    icon.addEventListener("click",() => {
    let firstImgWidth =firstImg.clientWidth + 14; 
      sliderimage.scrollLeft += icon.id == "left"  ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(),60);

    });
 
});

const dragStart = (e) => {
    //updatating global varialbles value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX  || e.touched[0] .pageX;
    prevScrollLeft = sliderimage.scrollLeft;
}


const dragging = (e) => {
    //scrolling images/sliderimage to left according to mouse pointer
    if(!isDragStart) return; 
    e.preventDefault(); 
    sliderimage.classList.add("dragging");
    let positionDiff = (e.pageX ||e.touched[0] .pageX)- prevPageX;
    sliderimage.scrollLeft = prevScrollLeft-positionDiff; 
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    sliderimage.classList.remove("dragging");

}
 
sliderimage.addEventListener("mousedown", dragStart); 
sliderimage.addEventListener("touchstart", dragStart); 

sliderimage.addEventListener("mousemove", dragging);
sliderimage.addEventListener("touchmove", dragging); 

sliderimage.addEventListener("mouseup", dragStop); 
sliderimage.addEventListener("mouseleave", dragStop);
sliderimage.addEventListener("touchend", dragStop); 







  