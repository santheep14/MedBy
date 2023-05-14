<?php
// define variables and set to empty values
$EmailAddressErr = $PasswordErr = $ConfirmpasswordErr = "";
$EmailAddress = $Password = $Confirmpassword =  "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["EmailAddress"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["EmailAddress"]);
  }
  
  if (empty($_POST["Password"])) {
    $emailErr = "Paswword is required";
  } else {
    $email = test_input($_POST["Password"]);
  }
    
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>