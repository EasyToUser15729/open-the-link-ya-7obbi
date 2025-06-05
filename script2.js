window.onload = function () {
  const mediaItems = document.querySelectorAll(".media");
  const viewerImg = document.getElementById("viewer-img");
  const viewerText = document.getElementById("viewer-text");
  const audio = document.getElementById("myAudio");
  const playBtn = document.getElementById("playAudioBtn");

  // توزيع الصور في دايرة (باستثناء center-img)
  const circleItems = document.querySelectorAll(".circle-gallery .media");
  const centerX = 200;
  const centerY = 200;
  const radius = 150; 
  const total = circleItems.length;

  circleItems.forEach((item, i) => {
    const angle = (i / total) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - 40;
    const y = centerY + radius * Math.sin(angle) - 40;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
  });

  // تفعيل الصورة والرسالة لكل عنصر
  mediaItems.forEach((item) => {
    const imgSrc = item.getAttribute("data-src");
    item.style.backgroundImage = `url(${imgSrc})`;

    item.addEventListener("click", () => {
      document.querySelector(".media.active")?.classList.remove("active");
      item.classList.add("active");

      viewerImg.src = imgSrc;
      viewerText.textContent = item.getAttribute("data-text");
    });
  });

  // تشغيل جزء من الأغنية
  playBtn.addEventListener("click", () => {
    audio.currentTime = 113;
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 42000); // 174 ثواني
  });

  // تشغيل الصورة اللي في النص عند الضغط عليها
  const centerImage = document.getElementById("centerImage");
  centerImage.addEventListener("click", () => {
    viewerImg.src = centerImage.src;
    viewerText.textContent = " 💗كانك العيد والباقون ايام , كل عام و انتي اجمل اعيادي يمريومتي يصغنونه ";
  });

  // ✅ إظهار صورة النص تلقائيًا عند تحميل الصفحة
  viewerImg.src = centerImage.src;
  viewerText.textContent = " 💗كانك العيد والباقون ايام , كل عام و انتي اجمل اعيادي يمريومتي يصغنونه ";
};
