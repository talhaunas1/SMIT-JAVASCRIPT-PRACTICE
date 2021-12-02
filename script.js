 function add()
 {
    var n1=parseInt( document.getElementById("n1").value) ;
    var n2=parseInt( document.getElementById("n2").value) ;

    var result = n1+n2;
    document.getElementById("result").innerHTML=result;

    
    //  alert("working");
    // alert(n1+n2);
      
    // by default input from user it is a string 

    //to check a type of varibale use typeof command


       //checking data type of n1
    //    alert(typeof (n1))
 }





function max()
{
    
    var a=parseInt (document.getElementById("n3").value);
    var b=parseInt (document.getElementById("n4").value);
   
    
    if(a<b)
    {
        var result2=b;
        document.getElementById("result2").innerHTML=result2;
    }
    else{
        var result3=a;
        document.getElementById("result2").innerHTML=result3;
    }
}


function max3()
{
    
    var a=parseInt (document.getElementById("n5").value);
    var b=parseInt (document.getElementById("n6").value);
    var c=parseInt (document.getElementById("n7").value);
   
    
    if(a>b && a>c)
    {
        var res=a;
        document.getElementById("result3").innerHTML=res;
    }

    else if(b>a && b>c)
    {
        var res2=b;
        document.getElementById("result3").innerHTML=res2;
    }
    else{
        var res3=c;
        document.getElementById("result3").innerHTML=res3;
    }
}



function check()
{
    
    var a=parseInt (document.getElementById("n8").value);
    // var b=parseInt (document.getElementById("n9").value);
    // var c=parseInt (document.getElementById("n7").value);
   
    
    if(a<0)
    {
        // var b=;
        document.getElementById("result4").innerHTML=a + " is negative";
       
    }

    else if(a>0)
    {
        // var res2=postive;
        document.getElementById("result4").innerHTML=a +" is positive";
    }
    else{
        // var res3=c;
        document.getElementById("result4").innerHTML=a +" this is zero";
    }
}


function divide()
{
    
    var a=parseInt (document.getElementById("n9").value);
  

    if ((a%5==0) && (a%11 ==0 ))
    {

        document.getElementById("result5").innerHTML= a +" is divisible  ";
    }
    else
    // document.write("the numer is not divivicble")
    document.getElementById("result5").innerHTML= a +" is not divisible  ";

    // var b=a%5 ;
    // var c=a%11;
    // if(b==0 && c==0)
    // {
    //     document.getElementById("result5").innerHTML=a+" is djasdj";
    // }
    // else
    // {
    //     document.getElementById("result5").innerHTML=a+" is not divisible";
    // }
}

function checkno()
{
    var a=parseInt(document.getElementById("n10").value);
    // var b=parseInt(document.getElementById("n11").value);


    if (a%2==0)
    {
        document.getElementById("result6").innerHTML=a+" is even";
    }
    else
    document.getElementById("result6").innerHTML=a+" is odd";
}

function leapyear()
{
    var a=parseInt(document.getElementById("n11").value);

    if (a%4==0)

    {
        document.getElementById("result7").innerHTML=a+" is a leap year"
    }
    else
    {
        document.getElementById("result7").innerHTML=a+" is not a leap year"
    }
}
