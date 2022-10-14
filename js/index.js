"use strict";

// Our Services Tabs manipulations

let servicesTabs = document.querySelectorAll(".service_menu_list_item");
let servicesDescriptionParagraphs = document.querySelectorAll(
  ".service_description"
);

servicesTabs.forEach(function (element, index) {
  element.addEventListener("click", (event) => {
    servicesTabs.forEach(function (element) {
      element.classList.remove("active_service_tab");
    });
    element.classList.add("active_service_tab");
    servicesDescriptionParagraphs.forEach(function (paragraph, i) {
      if (i == index) {
        paragraph.classList.add("service_paragraphs_active");
      } else {
        paragraph.classList.remove("service_paragraphs_active");
      }
    });
  });
});

// AMASING WORK PICTURES MANIPULATING

let amazingWorkCards = document.querySelectorAll(".amazing_work_card");
let amazingWorkTabs = document.querySelectorAll(".works_list_item");
let activeWorkTab;

amazingWorkTabs.forEach(function (workTab, index) {
  if (workTab.classList.contains("work_list_active")) {
    activeWorkTab = workTab;
  }
  workTab.addEventListener("click", (event) => {
    amazingWorkTabs.forEach(function (workTabsToHide) {
      if (workTabsToHide != workTab) {
        workTabsToHide.classList.remove("work_list_active");
      }
    });
    workTab.classList.toggle("work_list_active");
    if (workTab.classList.contains("work_list_active")) {
      activeWorkTab = workTab;
    }

    amazingWorkCards.forEach(function (card) {
      if (!workTab.classList.contains("work_list_active")) {
        loadMoreBtn.classList.add("loadMoreBtn_hide");
      } else {
        loadMoreBtn.classList.remove("loadMoreBtn_hide");
      }

      switch (index) {
        case 0:
          loadMoreBtnClicksCounter = 0;
          if (
            workTab.classList.contains("work_list_active") &&
            card.dataset.additionalPictures != "true"
          ) {
            card.classList.add("active");
            card.style.transform = "";
          } else {
            card.classList.remove("active");
          }

          break;

        case 1:
          loadMoreBtnClicksCounter = 0;
          if (
            card.dataset.workType == "Graphic Design" &&
            workTab.classList.contains("work_list_active") &&
            card.dataset.additionalPictures !== "true"
          ) {
            card.classList.add("active");
            card.style.transform = "";
          } else {
            card.classList.remove("active");
          }

          break;
        case 2:
          loadMoreBtnClicksCounter = 0;
          if (
            card.dataset.workType == "Web Design" &&
            workTab.classList.contains("work_list_active") &&
            card.dataset.additionalPictures !== "true"
          ) {
            card.classList.add("active");
            card.style.transform = "";
          } else {
            card.classList.remove("active");
          }

          break;
        case 3:
          loadMoreBtnClicksCounter = 0;
          if (
            card.dataset.workType == "Landing Pages" &&
            workTab.classList.contains("work_list_active") &&
            card.dataset.additionalPictures !== "true"
          ) {
            card.classList.add("active");
            card.style.transform = "";
          } else {
            card.classList.remove("active");
          }

          break;

        case 4:
          loadMoreBtnClicksCounter = 0;
          if (
            card.dataset.workType == "Wordpress" &&
            workTab.classList.contains("work_list_active") &&
            card.dataset.additionalPictures !== "true"
          ) {
            card.classList.add("active");
            card.style.transform = "";
          } else {
            card.classList.remove("active");
          }

          break;
        default:
          break;
      }
    });
  });
});

// LABELS OF IMAGES BACKSIDE

let imageBackSide = document.querySelector(".image_back_side");
let backSideWorkType = document.querySelector(".amazing_work_type");
amazingWorkCards.forEach(function (card) {
  card.addEventListener("click", (event) => {
    let backSideCopy = imageBackSide.cloneNode(true);
    backSideCopy.querySelector(".amazing_work_type").textContent =
      event.currentTarget.dataset.workType;

    if (event.currentTarget.style.transform != "rotateY(180deg)") {
      event.currentTarget.style.transform = "rotateY(180deg)";
      event.currentTarget.append(backSideCopy);
      backSideCopy.classList.remove("image_back_side_not_active");
    } else {
      let elementToDelete =
        event.currentTarget.querySelector(".image_back_side");
      setTimeout(() => {
        elementToDelete.remove();
      }, 800);
      event.currentTarget.style.transform = "";
    }
  });
});

const loadMoreBtn = document.querySelector(".load_more_btn");
let loadMoreBtnClicksCounter = 0;
let imagesCounter = 0;

function toggleMoreWorkImages(additionalWorkTypeCards) {
  additionalWorkTypeCards.forEach(function (additinalCard, index) {
    additinalCard.style.transform = "";

    if (
      additinalCard.dataset.additionalPictures === "true" &&
      loadMoreBtnClicksCounter == 1 &&
      additinalCard.dataset.workType === activeWorkTab.dataset.workType
    ) {
      imagesCounter = 0;
      setTimeout(
        () =>
          setTimeout(
            () => additinalCard.classList.add("active"),
            150 * ++imagesCounter
          ),
        3000
      );
      loadMoreBtn.classList.add("loadMoreBtn_hide");
      loadMoreBtn.classList.add("loadMoreBtn_hide");
    } else if (
      additinalCard.dataset.additionalPictures == "true" &&
      loadMoreBtnClicksCounter == 1 &&
      index <= 27 &&
      activeWorkTab.dataset.workType === "All"
    ) {
      imagesCounter = 0;
      setTimeout(
        () =>
          setTimeout(
            () => additinalCard.classList.add("active"),
            150 * ++imagesCounter
          ),
        3000
      );
    } else if (
      additinalCard.dataset.additionalPictures == "true" &&
      loadMoreBtnClicksCounter == 2 &&
      index > 27 &&
      activeWorkTab.dataset.workType === "All"
    ) {
      imagesCounter = 0;
      setTimeout(
        () =>
          setTimeout(
            () => additinalCard.classList.add("active"),
            150 * ++imagesCounter
          ),
        3000
      );
      loadMoreBtn.classList.add("loadMoreBtn_hide");
    }
  });
}

let numberOfDispayedWorkCards;
loadMoreBtn.addEventListener("click", (event) => {
  loadMoreBtnClicksCounter++;
  addloader(3000, ".load_more_loader");
  toggleMoreWorkImages(amazingWorkCards);
});

// CAROUSEL SECTION

let carouselForwardButton = document.querySelector(".carousel_forward_btn");
let carouselBackButton = document.querySelector(".carousel_backward_btn");
let feedbackMainSection = document.querySelectorAll(".feedback");
let carouselIcons = document.querySelectorAll(".feedback_small_icon_container");
let feedbackIndex = 0;

carouselForwardButton.addEventListener("click", function (event) {
  for (let index = 0; index < feedbackMainSection.length; index++) {
    const element = feedbackMainSection[index];
    element.classList.remove("feedback_active");
    element.children[3].children[0].classList.remove("opacity_pulse");
    element.children[3].children[0].style.removeProperty("opacity");
  }
  for (let i = 0; i < carouselIcons.length; i++) {
    const carouselIcon = carouselIcons[i];
    carouselIcon.classList.remove("carousel_icon_active");
    carouselIcon.children[0].classList.remove("opacity_pulse");
    carouselIcon.children[0].style.removeProperty("opacity");
  }

  if (feedbackIndex == feedbackMainSection.length - 1) {
    feedbackIndex = -1;
  }
  feedbackIndex++;

  feedbackMainSection[feedbackIndex].classList.add("feedback_active");
  feedbackMainSection[feedbackIndex].children[3].children[0].classList.add(
    "opacity_pulse"
  );
  carouselIcons[feedbackIndex].classList.add("carousel_icon_active");
  carouselIcons[feedbackIndex].children[0].classList.add("opacity_pulse");
});

carouselBackButton.addEventListener("click", function (event) {
  for (let index = 0; index < feedbackMainSection.length; index++) {
    const element = feedbackMainSection[index];
    element.classList.remove("feedback_active");
    element.children[3].children[0].classList.remove("opacity_pulse");
    element.children[3].children[0].style.removeProperty("opacity");
  }
  for (let i = 0; i < carouselIcons.length; i++) {
    const carouselIcon = carouselIcons[i];
    carouselIcon.classList.remove("carousel_icon_active");
    carouselIcon.children[0].classList.remove("opacity_pulse");
    carouselIcon.children[0].style.removeProperty("opacity");
  }

  if (feedbackIndex <= 0) {
    feedbackIndex = feedbackMainSection.length;
  }
  feedbackIndex--;
  feedbackMainSection[feedbackIndex].classList.add("feedback_active");
  feedbackMainSection[feedbackIndex].children[3].children[0].classList.add(
    "opacity_pulse"
  );
  carouselIcons[feedbackIndex].classList.add("carousel_icon_active");
  carouselIcons[feedbackIndex].children[0].classList.add("opacity_pulse");
});

carouselIcons.forEach(function (coarouselIcon, index) {
  coarouselIcon.addEventListener("click", (event) => {
    feedbackMainSection.forEach((element) => {
      element.classList.remove("feedback_active");
      element.children[3].children[0].classList.remove("opacity_pulse");
      element.children[3].children[0].style.removeProperty("opacity");
    });
    carouselIcons.forEach((element) => {
      element.classList.remove("carousel_icon_active");
      element.children[0].classList.remove("opacity_pulse");
      element.children[0].style.removeProperty("opacity");
    });
    coarouselIcon.classList.add("carousel_icon_active");
    coarouselIcon.children[0].classList.add("opacity_pulse");
    feedbackIndex = index;
    feedbackMainSection[feedbackIndex].classList.add("feedback_active");
    feedbackMainSection[feedbackIndex].children[3].children[0].classList.add(
      "opacity_pulse"
    );
  });
});

// ICONS ANIMATION SECTION

let requestId = requestAnimationFrame;
let opacityCountUp = true;
let feedbackIconsOpacity = 0.1;

function iconBorderpulsation(time) {
  if (opacityCountUp) {
    feedbackIconsOpacity += 0.004;
    if (feedbackIconsOpacity >= 0.5) {
      opacityCountUp = false;
    }
  } else {
    feedbackIconsOpacity -= 0.004;
    if (feedbackIconsOpacity <= 0) {
      opacityCountUp = true;
    }
  }

  document
    .querySelectorAll(".opacity_pulse")
    .forEach(function (element, index) {
      element.style.opacity = feedbackIconsOpacity;
    });
  requestAnimationFrame(iconBorderpulsation);
}

requestAnimationFrame(iconBorderpulsation);

//   MASONRY FOR IMAGES GALERY

window.onload = () => {
  bigMsnry;
  imagesLoaded(galeryImagesGrid).on("progress", function () {
    bigMsnry.layout();
  });
};

let galeryImagesGrid = document.querySelector(".galery_images_grid");
let bigMsnry = new Masonry(galeryImagesGrid, {
  itemSelector: ".galery_images",
  columnWidth: 378,
  gutter: 20,
});

function addMoreGaleryImages(images) {
  images.forEach(function (additinalImage) {
    additinalImage.classList.remove("galery_images_more_inactive");
  });
  bigMsnry.layout();
}

function addloader(duration, loader) {
  document.querySelector(loader).classList.add("lds-roller-active");
  setTimeout(
    () => document.querySelector(loader).classList.remove("lds-roller-active"),
    duration
  );
}

const loadMoreGaleryBtn = document.querySelector(".load_more_masonry_btn");
loadMoreGaleryBtn.addEventListener("click", (event) => {
  let moreGaleryImages = document.querySelectorAll(".galery_images_more");
  loadMoreGaleryBtn.classList.add("loadMoreBtn_hide");
  setTimeout(() => addMoreGaleryImages(moreGaleryImages), 3000);
  addloader(3000, ".img_gal_loader");
});
