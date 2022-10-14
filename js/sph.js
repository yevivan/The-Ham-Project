"use strict"

// Our Services Tabs manipulating

let servicesTabs = document.querySelectorAll(".service_menu_list_item")
let servicesDescriptionParagraphs = document.querySelectorAll(".service_description")

servicesTabs.forEach(function (element, index) {
    element.addEventListener("click", (event) => {

        servicesTabs.forEach(function (element) {
            element.classList.remove("active_service_tab")
        })
        element.classList.add("active_service_tab")
        servicesDescriptionParagraphs.forEach(function (paragraph, i) {
            if (i == index) {
                paragraph.classList.add("service_paragraphs_active")

            }
            else {
                paragraph.classList.remove("service_paragraphs_active")
            }
        }
        )
    });
});

// AMASING WORK PICTURES MANIPULATING WORKKING VERSION



let amazingWorkImages = document.querySelectorAll(".amazing_work_images");
let amazingWorkTabs = document.querySelectorAll(".works_list_item");


amazingWorkTabs.forEach(function (workTab, index) {
    workTab.addEventListener("click", (event) => {

        amazingWorkTabs.forEach(function (workTabsToHide) {

            if (workTabsToHide != workTab) {

                workTabsToHide.classList.remove("work_list_active")
            }

        });

        workTab.classList.toggle("work_list_active")
        amazingWorkImages.forEach(function (image) {

            if (!workTab.classList.contains("work_list_active")) {
                console.log(123);
                loadMoreBtn.classList.add("loadMoreBtn_hide");
            }
            else {
                loadMoreBtn.classList.remove("loadMoreBtn_hide");   
            }
            

            switch (index) {
                case 0:
                    // loadMoreBtn.classList.remove("loadMoreBtn_hide");
                    loadMoreBtnClicksCounter = 0;
                    if (workTab.classList.contains("work_list_active") && image.getAttribute("alt") != "additional_picteres") {
                        // loadMoreBtn.classList.remove("loadMoreBtn_hide");
                        image.classList.add("active");
                        
                    }
                    else { image.classList.remove("active"); 
                    // loadMoreBtn.classList.add("loadMoreBtn_hide")
                    
                }

                    break;

                case 1:
                  
                    loadMoreBtnClicksCounter = 0;
                    // loadMoreBtn.classList.remove("loadMoreBtn_hide");
                    if (image.getAttribute("alt") == "graphic_design" && workTab.classList.contains("work_list_active")) {
                        image.classList.add("active");
                        
                    }
                    else { image.classList.remove("active");
                    // loadMoreBtn.classList.remove("loadMoreBtn_hide") 
                }
                    
                    break;
                case 2:
                    // loadMoreBtn.classList.remove("loadMoreBtn_hide")
                    loadMoreBtnClicksCounter = 0;
                    if (image.getAttribute("alt") == "web_design" && workTab.classList.contains("work_list_active")) {
                        image.classList.add("active");
                    }
                    else { image.classList.remove("active"); }

                    break;
                case 3:
                    // loadMoreBtn.classList.remove("loadMoreBtn_hide")
                    loadMoreBtnClicksCounter = 0;
                    if (image.getAttribute("alt") == "landing_page" && workTab.classList.contains("work_list_active")) {
                        image.classList.add("active");
                    }
                    else { image.classList.remove("active"); }

                    break;

                case 4:
                    // loadMoreBtn.classList.remove("loadMoreBtn_hide")
                    loadMoreBtnClicksCounter = 0;
                    if (image.getAttribute("alt") == "wordpress" && workTab.classList.contains("work_list_active")) {
                        image.classList.add("active");
                    }
                    else { image.classList.remove("active"); }

                    break;
                default:
                    break;
            }

        });
    });

});



const loadMoreBtn = document.querySelector(".load_more_btn");
let loadMoreBtnClicksCounter = 0;
let imagesCounter = 0









function toggleMoreWorkImages (additionalWorkImages) {
    additionalWorkImages.forEach(function (additinalImage, index) {
        if (additinalImage.getAttribute("alt") == "additional_picteres" && loadMoreBtnClicksCounter == 1 && index <= 27) {   
            imagesCounter = 0
            setTimeout(() => setTimeout(()=>  additinalImage.classList.add("active"), 150*(++imagesCounter)), 3000) 
            loadMoreBtn.classList.add("loadMoreBtn_hide")
            setTimeout(() => loadMoreBtn.classList.remove("loadMoreBtn_hide"), 3000)
           
        }
        else if (additinalImage.getAttribute("alt") == "additional_picteres" && loadMoreBtnClicksCounter == 2 && index > 27) {
            imagesCounter = 0;
            setTimeout(() => setTimeout(()=>  additinalImage.classList.add("active"), 150*(++imagesCounter)), 3000)
            loadMoreBtn.classList.add("loadMoreBtn_hide")
        }
    })
}

loadMoreBtn.addEventListener("click", (event) => {
    loadMoreBtnClicksCounter++
    addloader(3000, ".load_more_loader")  
    toggleMoreWorkImages(amazingWorkImages)
    

})



// CAROUSEL SECTION

let carouselForwardButton = document.querySelector(".carousel_forward_btn");
let carouselBackButton = document.querySelector(".carousel_backward_btn");
let feedbackMainSection = document.querySelectorAll(".feedback");
let carouselIcons = document.querySelectorAll(".feedback_small_icon_container");
// let carouselIcons = document.getElementsByClassName("carousel_icon");
let feedbackIndex = 0;

carouselForwardButton.addEventListener("click", function (event) {

    for (let index = 0; index < feedbackMainSection.length; index++) {
        const element = feedbackMainSection[index];
        element.classList.remove("feedback_active");
        element.children[3].children[0].classList.remove("opacity_pulse");
        element.children[3].children[0].style.removeProperty("opacity")
    }
    for (let i = 0; i < carouselIcons.length; i++) {
        const carouselIcon = carouselIcons[i];
        carouselIcon.classList.remove("carousel_icon_active")
        carouselIcon.children[0].classList.remove("opacity_pulse");
        carouselIcon.children[0].style.removeProperty("opacity")
    }

    if (feedbackIndex == feedbackMainSection.length - 1) {
        feedbackIndex = -1;
    }
    feedbackIndex++

    feedbackMainSection[feedbackIndex].classList.add("feedback_active")
    feedbackMainSection[feedbackIndex].children[3].children[0].classList.add("opacity_pulse");
    carouselIcons[feedbackIndex].classList.add("carousel_icon_active")
    carouselIcons[feedbackIndex].children[0].classList.add("opacity_pulse")
    // console.log((feedbackMainSection[feedbackIndex]):nth-child(3));

});


carouselBackButton.addEventListener("click", function (event) {

    for (let index = 0; index < feedbackMainSection.length; index++) {
        const element = feedbackMainSection[index];
        element.classList.remove("feedback_active");
        element.children[3].children[0].classList.remove("opacity_pulse");
        element.children[3].children[0].style.removeProperty("opacity")
    }
    for (let i = 0; i < carouselIcons.length; i++) {
        const carouselIcon = carouselIcons[i];
        carouselIcon.classList.remove("carousel_icon_active")
        carouselIcon.children[0].classList.remove("opacity_pulse");
        carouselIcon.children[0].style.removeProperty("opacity")

    }

    if (feedbackIndex <= 0) {
        feedbackIndex = feedbackMainSection.length;
    }
    feedbackIndex--;
    feedbackMainSection[feedbackIndex].classList.add("feedback_active")
    feedbackMainSection[feedbackIndex].children[3].children[0].classList.add("opacity_pulse");
    carouselIcons[feedbackIndex].classList.add("carousel_icon_active")
    carouselIcons[feedbackIndex].children[0].classList.add("opacity_pulse");
    // console.log(feedbackIndex);

});


carouselIcons.forEach(function (coarouselIcon, index) {
    coarouselIcon.addEventListener("click", (event) => {
        feedbackMainSection.forEach(element => {
            element.classList.remove("feedback_active");
            element.children[3].children[0].classList.remove("opacity_pulse");
            element.children[3].children[0].style.removeProperty("opacity")
        });
        carouselIcons.forEach(element => {
            element.classList.remove("carousel_icon_active")
            element.children[0].classList.remove("opacity_pulse");
            element.children[0].style.removeProperty("opacity")
        });
        coarouselIcon.classList.add("carousel_icon_active")
        coarouselIcon.children[0].classList.add("opacity_pulse");
        feedbackIndex = index
        feedbackMainSection[feedbackIndex].classList.add("feedback_active");
        feedbackMainSection[feedbackIndex].children[3].children[0].classList.add("opacity_pulse");

    });



});

 
// Icons animation section

 

let requestId = requestAnimationFrame
let opacityCountUp = true;
let feedbackIconsOpacity = 0.1;

  function iconBorderpulsation (time) {
   
    
    if (opacityCountUp) {
        feedbackIconsOpacity+=0.004;
        if (feedbackIconsOpacity >= 0.5) {
            opacityCountUp = false;
        }
      }

      else {
        feedbackIconsOpacity-=0.004;
          if (feedbackIconsOpacity <= 0) {
            opacityCountUp = true;  
          }
      }


      document.querySelectorAll(".opacity_pulse").forEach (function(element, index) {
          element.style.opacity = feedbackIconsOpacity;
      });
  requestAnimationFrame(iconBorderpulsation)
  }

  requestAnimationFrame(iconBorderpulsation)


//   MASONRY FOR IMAGES GALERY

  window.onload = () => {
    bigMsnry
imagesLoaded( galeryImagesGrid ).on( 'progress', function() {
        bigMsnry.layout();
      });
}

    let galeryImagesGrid = document.querySelector('.galery_images_grid');
    console.log(galeryImagesGrid);
    let bigMsnry = new Masonry(galeryImagesGrid, {
      itemSelector: '.galery_images',
      columnWidth: 378,
      gutter: 20,

    });
    



function addMoreGaleryImages (images) {
    images.forEach(function (additinalImage) {
                    additinalImage.classList.remove("galery_images_more_inactive");
                          
            });
            bigMsnry.layout()
}

function addloader(duration, loader) {
    document.querySelector(loader).classList.add("lds-roller-active")
    setTimeout(()=>document.querySelector(loader).classList.remove("lds-roller-active"),duration)
}

const loadMoreGaleryBtn = document.querySelector(".load_more_masonry_btn");
loadMoreGaleryBtn.addEventListener("click", (event) => {
    let moreGaleryImages = document.querySelectorAll(".galery_images_more");
    loadMoreGaleryBtn.classList.add("loadMoreBtn_hide"); 
    setTimeout(()=>addMoreGaleryImages(moreGaleryImages),3000)
    addloader(3000, ".img_gal_loader")
    
})






