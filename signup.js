    // Create connection  
    $conn = new mysqli($servername, $username, $password, $dbname);  
    // Check connection  
    if ($conn -> connect_error)   
    {  
        die("Connection failed: ".$conn -> connect_error);  
    }  



    $sql = INSERT INTO 'User' (username,email,password)  
    VALUES('$fname', '$uname', '$lname', '$adress', '$cno');  

    if ($conn - > query($sql) === TRUE) {  
        echo“ record created successfully”  
    } 
    else {  
        echo "Error: ".$sql.  
        "<br>".$conn - > error;  
    }

    $conn - > close();  
    } 