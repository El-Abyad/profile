// احصل على قائمة الروابط
const links = document.querySelectorAll("ul a");

// اضف استماع للنقر على كل رابط
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    // منع سلوك الافتراضي للرابط
    event.preventDefault();

    // إزالة فئة "active" من جميع الروابط
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // إضافة فئة "active" إلى الرابط المنقر عليه
    this.classList.add("active");
    this.style.transition = ".3s";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".right-page a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // يمنع السلوك الافتراضي للرابط

      const targetId = link.getAttribute("href"); // الحصول على هوية الهدف من الرابط
      const targetElement = document.querySelector(targetId); // الحصول على العنصر الذي يحمل الهوية المستهدفة

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // التمرير إلى العنصر المستهدف بشكل سلس
      }
    });
  });
});

let darrk = document.getElementById("darrk");

darrk.addEventListener("click", function () {
  this.classList.toggle("dark");

  if (darrk.classList.contains("dark")) {
    document.body.style.background = "#212f45";
    document.querySelector(".x-page").style.background = "#006466";
    document.querySelector(".left-page").style.background = "#0b525b";
    document.querySelector(".right-page").style.background = "#0b525b";
  } else {
    document.body.style.background = "";
    document.querySelector(".x-page").style.background = "";
    document.querySelector(".left-page").style.background = "";
    document.querySelector(".right-page").style.background = "";
  }
});

let scrollUp = document.querySelector(".scroll-up");
let progress = document.querySelector(".progress");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function () {
  if (scrollY > 600) {
    scrollUp.style.right = "24px";
  } else {
    scrollUp.style.right = "-500px";
  }
};
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  progress.style.width = ` ${(scrollTop / height) * 100}%`;
});
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
