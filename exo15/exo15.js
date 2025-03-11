function add()
{
    let Fvalue = document.getElementById("first").value ;
    let Svalue = document.getElementById("second").value ;
    let message = document.getElementById("verif") ;
    if ((Fvalue =="") || (Svalue == "")|| (Fvalue =="")&&(Svalue != "")|| (Fvalue !="")&&(Svalue == ""))

       { message.textContent = "Must provide two parameters";

       }
       else
       {
         message.textContent ="It's God";
       }
}