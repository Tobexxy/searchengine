//$(document).ready(function()
//{
  //  $.getJSON("zuzu.json", function(data){
  //      console.log(data)
//
  //      $('.lecturer').html(data.lecturer);
  //     $('.field').html(data.field);
   //     $('.description').html(data.description);
   //     $('.email').html(data.email);

   
   ////   $('.profile').html(data.profile);
   //     $('.publication').html(data.publication);
   //     $('.researchinterest').html(data.researchinterest);

 //   }).fail(function(){
  //      console.log("check your code")
//
//

//
 //   })
//})
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user =>{
      const isVisible = 
      user.lecturer.toLowerCase().includes(value) || 
      user.email.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    })
})





fetch("zuzu.json")
    .then(response => response.json())
    .then(data => {
        users = data.map(user => {
         const card = userCardTemplate.content.cloneNode(true).children[0]
         const header = card.querySelector("[data-header]")
         const body = card.querySelector("[data-body]")
         header.textContent = user.lecturer
         body.textContent = user.email
         userCardContainer.append(card)
         return { lecturer: user.lecturer, email: user.email, element: card }
      
        })
    })
