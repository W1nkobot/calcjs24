var inele, expele, rend, res, elestr;

   function result()
   {
	   inele = document.getElementById("result");
	   expele = inele.value;
	   inele.value = "";
	   expele = inele.value;
   }   




   function ClearAll()
   {
      inele = document.getElementById("result");
	  expele = inele.value;
	  alert (expele)
      inele.value = "";
	  expele = inele.value;
	  alert (expele)
   }

   
   function ClearLastOne()
    {
      inele = document.getElementById("result");
      expele = inele.value;
	  rend = expele.length - 1;
	  res = inele.value.slice(0,rend);
      inele.value = res;
    }



   function inputExp(symbol) 
    {
        inele = document.getElementById("result");
        inele.value += symbol;
	}

	
   function znak(symbol)
      {

	    inele = document.getElementById("result");
		var elestr = inele.value;

		const znakarr = new Array ('+','-','^','*','÷');

		let b = new Boolean(check()); 
		//alert ("значение б после функции= "+b)        
		let c= new Boolean();


      for (let i = 0; i < znakarr.length; i++)
	  {		
		 var lstele = elestr.lastIndexOf(znakarr[i]);

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
	
	function tochka()
   {

    }


    function check()
       {
	    var cikl = 0;
		const znakarr = new Array ('+','-','^','*','÷');	
	    inele = document.getElementById("result");
		var elestr = inele.value;
				
        for (let j = 0; j < znakarr.length; j++)
	    {		
		 var lstele = elestr.lastIndexOf(znakarr[j]);
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
	 var expresion = document.getElementById("result");
	 var exp = expresion.value; 
	 TrParse();
	 
 }

function TrParse()
{
     inele = document.getElementById("result");
	 var exp = inele.value; 
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

