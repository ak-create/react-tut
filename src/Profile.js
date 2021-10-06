import React,{useState} from 'react';
 
 function Profile(){
   const loggedIn=false


    return (
        <div>
             {loggedIn?<h1>Welcome Ankit</h1>: <h1>Welcome Guest</h1>}
        </div>
   
    );
 }

 export default Profile