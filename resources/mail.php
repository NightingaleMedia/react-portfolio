<?php 
 header("Access-Control-Allow-Origin: *");
if($_POST['submit']){
    $from_email = $_POST['email']; // this is your Email address
    $from_brz = "mail@albertsigman.com"; // this is the sender's Email address
    $name = $_POST['name'] ?? "unknown";
    $send_to = 'alsigman@gmail.com';
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $email_body = '
<div class="email__wrap" style="font-family: sans-serif; min-height: 60vh; padding-bottom: 5rem; padding-top: 5rem; width: 100%; min-width:600px; background: #fbfbfb;  align-items: center; justify-content: center;">
<div class="email__main" style="font-family: sans-serif;  border: 1px solid grey; padding: 5px; max-width: 500px; margin: auto; background: #f7f7f7; padding: 2rem; border-radius: 10px; -webkit-box-shadow: -1px 1px 10px 4px rgba(0,0,0,0.38); 
box-shadow: -1px 1px 10px 4px rgba(0,0,0,0.38);">
<div class="email--header" style="font-family: sans-serif; height: 100px; display: flex; font-size: 1.75rem; align-items: center;"> 
<h2><span class="brand" style="background-color: #181818; color: white; padding: 5px; line-height: auto;">Brazee Street Studios</span><br>

</div>
<h3 style="color:#39363C; font-size 1.75rem; line-height: 2rem; ">Subject: ' . htmlspecialchars($subject)  . '</h3>
<hr>
<p class="email--body" style="font-size: 1.45rem; line-height: 2rem; color: #39363C;"> ' . htmlspecialchars($message) . '
</p>
<p class="signature" style="margin-top: 5rem; color: grey; font-size: 1.25rem;">--- </p>
<p style="color: grey; font-size: 1.25rem;">' . htmlspecialchars($name) . ' </p>
<p class="signature--email"><a href="mailto:' . htmlspecialchars($from_email) . '"> ' . htmlspecialchars($from_email) . '</a> </p>

</div>
<p class="email--footer" style="margin: auto; margin-top: 3rem; max-width: 400px; text-align: center;">This email was auto-generated, you can reply directly to this and be in contact with the customer!</p>
</div>
';
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = 
	'Return-Path: ' . $from_brz . "\r\n" . 
	'From: ' . $name . ' <' . $from_brz . '>' . "\r\n" . 
	'X-Priority: 3' . "\r\n" . 
	'X-Mailer: PHP ' . phpversion() .  "\r\n" . 
	'Reply-To: ' . $name . ' <' . $from_email . '>' . "\r\n" .
	'MIME-Version: 1.0' . "\r\n" . 
	'Content-Transfer-Encoding: 8bit' . "\r\n" . 
	'Content-Type: text/html;  charset=ISO-8859-1' . "\r\n";
$params = '-f ' . $from_brz;

$test = mail($send_to, "Brazee Studios | Contact Us", $email_body, $headers, $params);
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
echo $test;    
}


?>
