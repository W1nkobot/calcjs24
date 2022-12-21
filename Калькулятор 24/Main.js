var ele;



     function ClearAll()
    {
     ele = document.getElementById("result");
     ele.value = "";
     }
	 
	 
   function ClearLastOne()
  {
    ele = document.getElementById("result");
    var res = ele.value;
	var rend = res.length - 1;
	res = ele.value.slice(0,rend);
	ele.value = res;
   }

   function inputExp(symbol) 
        {
            ele = document.getElementById("result");
            ele.value += symbol;
        }

   
   
   
   
   function znak(symbol)
    {

	    ele = document.getElementById("result");
		var elestr = ele.value;

		const znakarr = new Array ('+','-','^','*','÷');

		let b = new Boolean(check()); 
		//alert ("значение б после функции= "+b)        
		let c= new Boolean();


      for (let i = 0; i < znakarr.length; i++)
	  {		
		 var lstele = elestr.lastIndexOf(znakarr[i]);

		if (lstele == elestr.length - 1)
	    {
		  //alert ("true1") 			
		  c = true;
          break;	

	    }
		
	    else 
	   {

		   if (b == true)
		   {
			//  alert("true2")			   
			  c = true;
			  break;
		    }
		    else 
		   {
			  //alert("false1")
			  c = false;			  
			  break;

		    }
	    } 
      }
	   // alert (c+'=c')
	       if (c == true)
		 {
		//	 alert ('replace')
			ClearLastOne();
 			inputExp(symbol);
		 }
		 else 
		 {
			// alert ('new')
			 inputExp(symbol);
		 }
     }



   
 		function check()
 {
	    var cikl = 0;
		const znakarr = new Array ('+','-','^','*','÷');	
	    ele = document.getElementById("result");
		var elestr = ele.value;
				
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
	//alert ('знак не совпадает, проверка следующего')
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
	  // alert ("значение функции чек = "+b);

 }
 
 
 function equal()
 {
	 var expresion = document.getElementById("result");
	 var exp = expresion.value; 
	 TrParse();
	 
 }

function TrParse()
{
     ele = document.getElementById("result");
	 var exp = ele.value; 
	 const exparr = exp.split('');
     const term = exp.split(/\+|\-|\*|\÷|\^/);
	 
	 for (let i = 0; i < term.length; i++)
	 {
		 for (let j = 0; j < exparr.length; j++)
		 {
			 alert ('equal')
		 }
		 alert('cicl')
	 }


}

function tochka()
{
	var cikl = 0;
	ele = document.getElementById("result")
	var exp = ele.value;
	const term = exp.split(/\+|\-|\*|\÷|\^/);
	// alert ('term='+term)
	var lsterm = term [ term.length - 1 ];
	// alert (lsterm+'=lsterm')
	const lstermch = lsterm.split('');
	// alert ('lstermch=' + lstermch[0])
	for (var i = 0; i < lstermch.length; i++)
	{
		if (lstermch [0] == '.')
		{
			alert ('ERROR1')
			break;
		}
		else 
		{
			if (lstermch[i] == '.')
			{
				alert ('ERROR2')
				break;
			}
			else
			{

				cikl++;
			}				
		}
		
	}
	alert (lstermch.length)
	alert (cikl)
	if (cikl == lstermch.length)
	{
		inputExp('.');
	}
}