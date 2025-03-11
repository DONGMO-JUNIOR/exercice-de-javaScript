     function   Compute_the_sum_cube()
{
    let num =document.getElementById("nombre").value;
    if(( num==="") || isNaN(num) )
      {
       document.getElementById("send").textContent= "Veuillez entrer un nombre valide comme par exemple 1 ";
       return;
      }
      let sum = 0;
      for (let i=0; i<num; i++)
         {
         sum = sum + Math.pow(i ,3);
         }
         document.getElementById("send").textContent= "your sum are:" + sum ;
}