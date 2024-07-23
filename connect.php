<?php
    $irstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $refno = $_POST[ 'refno'];
    $comments = $_POST['comments'];

    //Database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(firstname, lastname, email, refno ,comments) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssis",$firstname, $lastname, $email, $refno, $comments);
        $stmt->execute();
        echo "submission succesful";
        $stmt->close();
        $conn->close();
    }

