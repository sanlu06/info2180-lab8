 window.onload = function() {
           document.getElementById("lookup").addEventListener("click", function(){
                // go out and get result from request.php
                var a = "world.php?all=true&format=xml";
                var b = document.getElementById("term").value;
                var c = a.concat(b);
                
           new Ajax.Request( c,
               {
                  parameters: {term:"term"},
                   method: "get",
                   onSuccess: definition,//callback is a function that collects 
                                         //the server payload (data)
                } );
           });
             
            function definition(data){
               if (data.length == 0) { 
                 document.getElementById("term").innerHTML = "No Countries";
                 return;
           }  else{
               document.write(data.responseXML);
                 //data.responseText, data.responseXML, data.status
    }}};

          
         
         