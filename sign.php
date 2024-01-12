
<!DOCTYPE html>
<html>
    <head>
        <title>Sign Form</title>
        <h2>SIGN Form : </h2>
    </head>
    <body style= "background-color:#9400D3"><hr>
        <form method="post" action=""><br>
            <label>Name :</label>
            <input type = text  name = name   ></input>
            <br><br>
            <label>E-mail Id :</label>
            <input type = email  name = email   ></input>
            <br><br>
            <label>Enter Your Query :</label>
            <input type = test  name = message   ></input>
            <br><br>

            <input type="submit" value="submit">            
        </form>

        
    <?php
    

    
    
    
    $a = $_POST['name'];
    $b = $_POST['email'];
    $c = $_POST['message'];
  
    $con = mysqli_connect("localhost","root","","register");
    $sql = "INSERT INTO registration(Name,EmailID,Message) values('$a','$b','$c')";
    $result = mysqli_query($con,$sql);
        if($result){
            echo "USER DATA IS ADDED TO DB";
        }
        else{
            echo "INVALID";
        }
    
    
    
    
    
    
    ?>
    </body>



</html>