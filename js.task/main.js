
var i=prompt();

if(i>9 && i<100){
    var teklik=i%10;
    var a=teklik;
    var onluq=(i-a)/10;
    var sum=teklik+onluq;
    alert(sum)
 }
else{
     alert(i)
}
