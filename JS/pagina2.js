const caja1 = document.querySelector(".caja1");
 let puntaje = 0;
 caja1.addEventListener("click",(event)=>{
        const btnCorrecto1 = document.querySelector(".rpc1");
        const btnOpcion11  = document.querySelector(".op11");
        const btnOpcion21  = document.querySelector(".op21");

                if(event.target.classList.contains("rpc1")){

                    btnCorrecto1.classList.add("correcta");
                    btnCorrecto1.disabled = true;
                    btnOpcion11.disabled = true;
                    btnOpcion21.disabled = true; 
                    puntaje = puntaje + 5;
                 
                    
               }else if(event.target.classList.contains("op11")){
                  
                   btnOpcion11.classList.add("incorrecta");
                   btnCorrecto1.disabled = true;
                   btnOpcion11.disabled = true;
                   btnOpcion21.disabled = true; 
                   puntaje = puntaje;
                  
               }
        
               if(event.target.classList.contains("op21")){
                   btnOpcion21.classList.add("incorrecta");
                   btnCorrecto1.disabled = true;
                   btnOpcion11.disabled = true;
                   btnOpcion21.disabled = true; 
                   puntaje = puntaje;
                
               }
              });

  
const caja2 = document.querySelector(".caja2");

caja2.addEventListener("click",(event)=>{
         
        const btnCorrecto2 = document.querySelector(".rpc2");
        const btnOpcion12 = document.querySelector(".op12");
        const btnOpcion22 = document.querySelector(".op22");

        if(event.target.classList.contains("rpc2")  ){
                btnCorrecto2.classList.add("correcta");
                btnCorrecto2.disabled = true;
                btnOpcion12.disabled = true;
                btnOpcion22.disabled = true;
              
                puntaje  = puntaje + 5;  
                                 
        }else if( event.target.classList.contains("op2")){
                btnrpc.classList.add("correcta");
                btnop3.disabled = true;
                btnop2.classList.add("incorrecta");
                puntaje = puntaje 
        }else if( event.target.classList.contains("op3")){
                btnrpc.classList.add("correcta");
                btnop2.disabled = true;
                btnop3.classList.add("incorrecta");
                puntaje = puntaje;
        }
})
   




