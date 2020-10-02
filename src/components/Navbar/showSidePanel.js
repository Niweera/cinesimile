const  showSidePanel=()=>
        {
            var allClasses= document.getElementsByClassName('bx--header-panel');
            var actionButton=document.getElementById("show-side-panel");
            var global_header=document.getElementById("global_header");
            for (let i = 0; i < allClasses.length; i++) { 
                if(allClasses[i].classList.contains("bx--header-panel--expanded"))
                {   allClasses[i].classList.remove("bx--header-panel--expanded");
                    actionButton.classList.remove('focus-in');
                    actionButton.classList.add('focus-out');
                    global_header.style.border = "none";
                }
                     
                else
                {
                    allClasses[i].classList.add("bx--header-panel--expanded");
                    actionButton.classList.remove('focus-out');
                    actionButton.classList.add('focus-in');
                    global_header.style.border = "1px solid white";

                }
                    
            } 
    
        }

export default showSidePanel;        