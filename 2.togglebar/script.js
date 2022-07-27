
let menue = document.querySelector('#menue');
// let navbar = document.querySelector('.navcontent');
let active = document.querySelectorAll('.active')
// menue.onclick = () => {
// //    console.log(navbar);
//    // menue.classList.toggle('fa-times');
//    navbar.classList.toggle('active');
//    navbar.style.display="block";
// //    navbar[1].classList.toggle('active');
// }
// console.log(active)
menue.onclick=()=>{
   for(var i=0; i<active.length;i++){
      // console.log(active[i])
      if(active[i].style.display==="none")
      {
      active[i].style.display="block";
      // console.log(active[i]);
   }
   else 
   {
      active[i].style.display="none"
   }
 }
}