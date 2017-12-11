function subnmitFunction()
{
    var x=document.forms["contactForm"]["name"].value;
    var y=document.forms["contactForm"]["email"].value;
    var w=document.forms["contactForm"]["subject"].value;
    var z=document.forms["contactForm"]["body"].value;
    if(x==null || x=="" || y==null || y=="" || z==null || z=="" || w==null || w=="")
        {
            alert("Not all fields filled in correctly");
        }
        else{
            if(x!="webi")
            {
                if(y!="72626")
                {
                    alert("Email Sent!");
                }
                else{
                    alert("Something has gone terribly wrong!");
                }
            }
            else{
                alert("Email cannot be sent");
            }
        }
}