window.blOpenModal=function(o,e){var l=new Boolean(!1),n=document.querySelectorAll(o),c=document.querySelector(e),t="bl-modal-background",i=e+" + ."+t,s='<div class="'+t+'"></div>';c.insertAdjacentHTML("afterend",s);var a=document.querySelector(i);for(loopcount=0;loopcount<n.length;loopcount++)1==l&&console.log("listening for open click on: "+o),n[loopcount].addEventListener("click",(function(o){1==l&&console.log("opening modal: "+e),"A"!==o.target.tagName&&(a.classList.add("bl-visible"),c.classList.add("bl-visible"))}));var d=function(){1==l&&console.log("closing modal: "+e),a.classList.remove("bl-visible"),c.classList.remove("bl-visible")};c.querySelector(".bl-modal-close").addEventListener("click",(function(){d()})),a.addEventListener("click",(function(){d()}))};