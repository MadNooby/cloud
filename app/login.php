<?php
    
    if(isset($_GET['username']) && isset($_GET['password'])){
        $user=addslashes($_GET['username']);   
        $pass=addslashes($_GET['password']);
        if($user==='aman' && $pass==='aman'){
            echo "success";
        }
        else{
            echo "failed";
        }
    }
    else{
        echo "failed";
    }
?>