//check whether change is enough for payment
//array a contains no of coins of 25 paise,50 paise,1 rupee,5 rupee
//amount is amount to be paid for a small purchase
//return value: true/false
   function enoughChange(a,amount)
		 {
		    total=0;
		    for(i=0;i<a.length;i++)
			{
			   switch(i)
			   {
			     case 0:
				   total=total+a[i]*0.25;
				   break;
				 case 1:
				   total=total+a[i]*0.50;
				   break;
                 case 2:
				   total=total+a[i]*1;
				   break;			
				 case 3:
				   total=total+a[i]*5;
				   break;  
			   }
			}
			return total>=amount;					
		 }		        	
	  console.log(enoughChange([4,2,3,1],8));//true
	  console.log(enoughChange([4,2,3,1],11));//false

