var inele, expele, rend, res, lstele;

   function resulted()
   {
	   inele = document.getElementById("result");
	   expele = inele.value;
	   let rslt = [inele,expele]
	   return rslt;
   }   




   function ClearAll()
   {
	   let rslt = resulted ();
      rslt[0].value = "";

   }

   
   function ClearLastOne()
    {
      let rslt = resulted();
	  rend = rslt[1].length - 1;
	  res = rslt[0].value.slice(0,rend);
      rslt[0].value = res;
    }



   function inputExp(symbol) 
    {
        let rslt = resulted();
        rslt[0].value += symbol;
	}

	
   function znak(symbol)
   {
	    let rslt = resulted();
		let elestr = rslt[0].value;
		const znakarr = new Array ('+','-','^','*','÷');
		let b = (check()); 
		//alert ("значение б после функции= "+b)        
		let c= new Boolean();


      for (let i = 0; i < znakarr.length; i++)
	  {		
		 lstele = elestr.lastIndexOf(znakarr[i]);

		if (lstele == elestr.length - 1)
	    { 			
		  c = true;
          break;	
	    }
		
	    else 
	   {

		   if (b == true)
		   {			   
			  c = true;
			  break;
		   }
		   
		    else 
		   {
			  c = false;			  
			  break;
		    }
	    } 
      }

	       if (c == true)
		 {
			ClearLastOne();
 			inputExp(symbol);
		 }
		 
		 else 
		 {
			 inputExp(symbol);
		 }
    } 
	
    function check()
       {
		const znakarr = new Array ('+','-','^','*','÷');	
	    let rslt = resulted();
		let elestr = rslt[0].value;
				
        for (let j = 0; j < znakarr.length; j++)
	    {		
		  lstele = elestr.lastIndexOf(znakarr[j]);
		 //alert (lstele+" = "+(elestr.length))

		 if (lstele == elestr.length - 1)
	    {
		//	alert ('знак совпадает')
         var b = 1;
		 break;
	    }
	    else 
	    { 
			var b = 0;	
	    }
       }
	   		if (b==1)
		{
			return true;
		}
		else 
		{
			return false;
		}

        }
 
 
 function equal()
 {
	 
 }

function TrParse()
{
     let rslt = resulted();
	 var exp = rslt[0].value; 
	 const exparr = exp.split('');
     const term = exp.split(/\+|\-|\*|\÷|\^/);
	 
	 for (let i = 0; i < term.length; i++)
	 {
		 for (let j = 0; j < exparr.length; j++)
		 {

		 }
	 }


}

function tochka()
{

}

