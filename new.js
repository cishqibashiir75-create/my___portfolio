window.addEventListener("load",function(){
    console.log("Welcome to my portfolio website!");

});
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click',function (){
        console.log("nav clicked:",link.textContent);
    })

});
const projectButton = document.querySelector(".btn");
  if (projectButton){
    projectButton.addEventListener("click",function(){
     console.log("welcome to my projects!")
    });
  }
  const footer = document.querySelector("footer p");
  if(footer){
    footer.textContent="@" + new Date().getFullYear()+ "My Portfolio";
  }
  const skillsSection = document.querySelector("#skills");
  if(skillsSection) {
    skillsSection.addEventListener("click",function(){
        skillsSection.style.borderTop="3px solid #38bdf8";
    })
  }