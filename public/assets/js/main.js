!function(){const e=document.querySelector(".burger"),t=document.querySelector(".nav");e?.addEventListener("click",(e=>{e.target.classList.toggle("js-active"),t.classList.toggle("js-active")})),document.querySelectorAll(".dropdown__trigger")?.forEach((e=>{e.addEventListener("click",(()=>{(".dropdown",e.parentNode.closest(".dropdown")).classList.toggle("js-active")}))})),document.addEventListener("click",(e=>{e.target.closest(".dropdown")||document.querySelectorAll(".dropdown").forEach((e=>{e.classList.remove("js-active")}))}))}();