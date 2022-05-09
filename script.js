// var scrollInterval = setInterval(function(){
//     window.scrollBy(0,50);

//     if(window.pageYOffset() === 100){
//         clearInterval(scrollInterval);
//     }

// },50);


// // clearInterval(scrollInterval);

// var homeButton = document.getElementById('home_btn');
// var aboutButton = document.getElementById('about_btn');
// var skillButton = document.getElementById('skill_btn');
// var experienceButton = document.getElementById('experience_btn');
// var educationButton = document.getElementById('education_btn');
// var portfolioButton = document.getElementById('education_btn');
// var contactButton = document.getElementById('contact_btn');


// homeButton.addEventListener('click',function(){
//     var targetPos = 0;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+50
//             window.scrollBy(0,50)
//     },50)       
// });

// aboutButton.addEventListener('click',function(){
//     var targetPos = 20;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+10
//             window.scrollBy(0,10)
//     },50)       
// });

// skillButton.addEventListener('click',function(){
//     var targetPos = 400;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+50
//             window.scrollBy(0,50)
//     },50)       
// });

// experienceButton.addEventListener('click',function(){
//     var targetPos = 600;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+50
//             window.scrollBy(0,50)
//     },50)       
// });

// educationButton.addEventListener('click',function(){
//     var targetPos = 800;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+50
//             window.scrollBy(0,50)
//     },50)       
// });

// portfolioButton.addEventListener('click',function(){
//     var targetPos = 1000;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+50
//             window.scrollBy(0,50)
//     },50)       
// });

// contactButton.addEventListener('click',function(){
//     var targetPos = 1200;
//     var currentPos = 0;
//     var scrollInterval = setInterval(function(){
//             if(currentPos >= targetPos){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             currentPos = currentPos+50
//             window.scrollBy(0,50)
//     },50)       
// });

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);

for(var i =0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
      event.preventDefault(); 
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);

    
    if(targetSectionId =='contact'){
        window.scrollBy(0,10000);
        return;
    }
     
    var interval = setInterval(function(){
        var targetSectonCordinates = targetSection.getBoundingClientRect();
                    if(targetSectonCordinates.top<=60){
                        clearInterval(interval);
                        return;
                    }
                 window.scrollBy(0,50);
    },20);

    console.log(targetSection);
            



    });
}



// Skill Fill Animation

//  TODO:
//  Handle scroll event on window
//  Check that skills section container is visible or not
//  Ensure that initial width of colored skill div is Zero
//  Start animation on every skill 
//  Store skill level -> HTML with the help of data attribute

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;


function initiliseBars(){
    for(let bar of progressBars){
        bar.style.width = 0+'%';
    }
}
initiliseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let intervel  = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(intervel);
                return;
            }else{
                currentWidth++;
                bar.style.width = currentWidth +'%';
            }
        },10);
    }
}
function checkScroll(){
  
    var skillsContainerCoordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && skillsContainerCoordinates.top < window.innerHeight){
         
         animationDone = true;
      
            console.log("skill Section visible");
        fillBars();
    }else if( skillsContainerCoordinates.top > window.innerHeight){
        animationDone = false;
        initiliseBars();
        
    }


}




