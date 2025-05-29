const images = document.querySelectorAll("#container img");

let currentIndex = 0;

// Create the lightbox elements
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.style.position = "fixed";
lightbox.style.top = 0;
lightbox.style.left = 0;
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0, 0, 0, 0.9)";
lightbox.style.display = "flex";
lightbox.style.flexDirection = "column";
lightbox.style.alignItems = "center";
lightbox.style.justifyContent = "center";
lightbox.style.zIndex = "9999";
lightbox.style.display = "none";

// Inner HTML for lightbox
lightbox.innerHTML = `
  <span id="close" style="position:absolute;top:20px;right:30px;font-size:40px;color:white;cursor:pointer;">&times;</span>
  <img id="lightbox-img" src="" style="max-width:90%; max-height:80%; border:5px solid white; border-radius:10px;">
  <div style="margin-top:20px;">
    <button id="prev" style="font-size:2rem;padding:10px 20px;margin:0 10px;">&#10094; Prev</button>
    <button id="next" style="font-size:2rem;padding:10px 20px;margin:0 10px;">Next &#10095;</button>
  </div>
`;

document.body.appendChild(lightbox);

// Lightbox functionality
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Optional: Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
