<?php 
if(isset($_POST['submit'])){
    $to = "sfxholidayhomes@gmail.com"; // this is your Email address
    //$from = $_POST['email']; // this is the sender's Email address
    $full_name = $_POST['full_name'];
    $telephone = $_POST['telephone'];
    $email_address = $_POST['email_address'];
    $email_address = $_POST['friend_email_address1'];
    $email_address = $_POST['friend_email_address2'];
    $telephone = $_POST['arrival_day''arrival_month''arrival_year'];
    $telephone = $_POST['depature_day'];
    $telephone = $_POST['depature_month'];
    $telephone = $_POST['depature_year'];
    $telephone = $_POST['no_of_adults'];
    $telephone = $_POST['no_of_children'];
    $telephone = $_POST['no_of_children1'];
    $telephone = $_POST['comments'];

     $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $full_name . "  wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $full_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $full_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>