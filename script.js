//javascript for navigation bar effects on scroll
window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY>0);
})

//javascript of responsive navigation sidebar menu
const menuBtn=document.querySelector(".menu-btn");
const navigation=document.querySelector(".navigation");
const navigationItems=document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})

navigationItems.forEach((navigationItems)=>{
    navigationItems.addEventListener("click",()=>{
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    })
})

//javascript for scroll to top bottom
const scrollBtn=document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll",function(){
    scrollBtn.classList.toggle("active",window.scrollY>500);
})

//javascript for scroll back to top on click scroll to top button
scrollBtn.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

//javascript for reveal website elements pn scroll
window.addEventListener("scroll",reveal);

function reveal(){
    var reveals=document.querySelectorAll(".reveal");

    for(var i=0;i<reveals.length;i++){
        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=50;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add("active");
        }
    }
}

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)