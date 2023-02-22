//*************************************-------test------***************************************88888 */
// function myFunc(){
//     var check = document.getElementById("r");
//     var info = document.getElementById("ifo");
//     if(check.checked == true){
//         info.style.display = "none";
// }else{
//     info.style.display = "ruby";
// }
// }

    // $('#sidebarBtn').click(function(){
    //     $('.sideBar').toggleClass('active');
    


var inf = document.getElementsByClassName("r");
var con= document.getElementById("co");
var arr = document.getElementsByClassName("grid");
var com = document.getElementById("commercial");
var s_btn = document.getElementById('sidebarBtn');
var closeBtn = document.getElementById('c_Btn')
var sidebar =document.getElementById('sideBar');
var videoPlayer = document.getElementById('video-player');
var video = document.getElementById('myVideo');
var playBtn = document.getElementById('playBtn');
var videoPlayer = document.getElementById('video-player');
var closeBtnAcc = document.getElementById('clAcc');
var pub = document.getElementById('pubVideo');
var vidPub = document.getElementById('vidPub');

// still is working
window.onload = (event )=>{
    if(vidPub.paused){
        vidPub.play();
    }else{
        
    } 
};


 closeBtn.addEventListener("click", function(){
        sidebar.style.left="-250px";
        s_btn.style.display="block";
 });

s_btn.addEventListener("click", function(){
    sidebar.style.left=0;
    s_btn.style.display="none";
});


// if(myVideo.paused){
//     // myVideo.play();
//    playBtn.style.display="unset";
// }
// else{
//     // playBtn.style.display="none";
// }
function myFunco(){
    if(humItem.style.display){
        humItem.style.display="block";
    }
    else{
        humItem.style.display="none";
    }
}
// the jquery dont work
// $("#humbergerMenu").click(function(){
//     $(".humbergerItem").slideToggle();
// });

// 


// the play button
function play(){
    if(myVideo.paused){
        myVideo.play();
    playBtn.style.opacity="0";

    }
    else{
        myVideo.pause();
        playBtn.style.opacity="100";
        
}
}
// La bouton fermer
function closeV(){
    videoPlayer.style.display="none";
    myVideo.pause();
}


    closeBtnAcc.addEventListener('click', function(){
        pub.style.display="none";
        vidPub.pause();
    });


// la selection des videos
function selectVideo(file){
    myVideo.src=file;
    videoPlayer.style.display="block";
}







// var chx ={info:1, cuisine:2}
//     for(var i=0; i<arr.length; i++){
//         arr[i].style.display="none";

function commercial(){
    if(con.checked == true){
    com.style.display="block";
    for(var i=0; i<arr.length; i++){
        arr[i].style.display="none";
    }
}

}
function plus(){
    for(var i=0; i<arr.length; i++){
        arr[i].style.display="grid";
                
            }
            com.style.display="block";
    }


    function info(){
        for(var i=0; i<arr.length; i++){
            arr[i].style.display="none";
            if(inf[i].checked == true){
              
                    arr[i].style.display="grid";
                    com.style.display="none";
            }
        }
}


//**************************************************************************** */

// The carousel part
let slidePosition = 0;
const slides = document.querySelectorAll(".carousel__item");
const totalSlides = slides.length;

document.querySelector("#carousel-button-next").addEventListener("click", function(){
moveToNextSlide();
});

document.querySelector("#carousel-button-prev").addEventListener("click", function(){
moveToPrevSlide();
});
function updateSlide(){
    for (let slide of slides){
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides[slidePosition].classList.add("carousel__item--visible");
}
function moveToNextSlide(){
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    updateSlide();

}

function moveToPrevSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    }else{
        slidePosition--;
    }

    updateSlide();
}
// setInterval(moveToNextSlide, 6000);


// The carousel part2
let slidePos= 0;
const glises = document.querySelectorAll(".carousel__item2");
const total = glises.length;

document.querySelector("#carousel-button-next2").addEventListener("click", function(){
moveToNext();
});

document.querySelector("#carousel-button-prev2").addEventListener("click", function(){
moveToPrev();
});
function update(){
    for (let glise of glises){
        glise.classList.remove('carousel__item--visible2');
        glise.classList.add('carousel__item--hidden2');
    }
    glises[slidePos].classList.add("carousel__item--visible2");
}
function moveToNext(){
    if(slidePos === total -1){
        slidePos = 0;
    }else{
        slidePos++;
    }
    update();

}

function moveToPrev(){
    if(slidePos === 0){
        slidePos = total -1;
    }else{
        slidePos--;
    }

    update();
}
setInterval(moveToNext, 5000);

// carousel part 3
// The carousel part2
let slidePos_= 0;
const glises_ = document.querySelectorAll(".carousel__item3");
const total_ = glises_.length;

document.querySelector("#carousel-button-next3").addEventListener("click", function(){
moveToNext_();
});

document.querySelector("#carousel-button-prev3").addEventListener("click", function(){
moveToPrev_();
});
function update_(){
    for (let glise of glises_){
        glise.classList.remove('carousel__item--visible3');
        glise.classList.add('carousel__item--hidden3');
    }
    glises_[slidePos_].classList.add("carousel__item--visible3");
}
function moveToNext_(){
    if(slidePos_ === total -1){
        slidePos_ = 0;
    }else{
        slidePos_++;
    }
    update_();

}

function moveToPrev_(){
    if(slidePos_ === 0){
        slidePos_ = total_ -1;
    }else{
        slidePos_--;
    }

    update_();
}
setInterval(moveToNext_, 4000);

// 444444
// carousel part 4
// The carousel part4
let slide_Pos_= 0;
const _glises = document.querySelectorAll(".carousel__item4");
const _total = _glises.length;

document.querySelector("#carousel-button-next4").addEventListener("click", function(){
_moveToNext();
});

document.querySelector("#carousel-button-prev4").addEventListener("click", function(){
_moveToPrev();
});
function _update(){
    for (let glise of _glises){
        glise.classList.remove('carousel__item--visible4');
        glise.classList.add('carousel__item--hidden4');
    }
    _glises[slide_Pos].classList.add("carousel__item--visible4");
}
function _moveToNext(){
    if(slide_Pos === _total -1){
        slide_Pos = 0;
    }else{
        slide_Pos++;
    }
    _update();

}

function _moveToPrev(){
    if(slide_Pos === 0){
        slide_Pos = _total -1;
    }else{
        slide_Pos--;
    }

    _update();
}
setInterval(_moveToNext, 4000);