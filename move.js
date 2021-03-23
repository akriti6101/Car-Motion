var x=0;
var p=0;
var m=0;

function start()
{


    x=setInterval(run,200); 
 
    function run(){
     
        if(p==1180)
        {m=p
            p=0


           
        }else{
                      document.getElementById('car').style.left=p+'px';
                      
                      if(m>=1000)
                      {
                          var k=m/1000;
                          document.getElementById('dis').value=k +" kms";
                      }else{
                      document.getElementById('dis').value=m +" meters";
                      }
                   p=p+5;
                   m=m+5;
               }
    }


}


function stop()
{
    clearInterval(x)
}