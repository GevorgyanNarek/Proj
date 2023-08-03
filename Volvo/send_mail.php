<?php
// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);

// Extract data from the POST request
$recipient = $data['recipient'];
$subject = $data['subject'];
$message = $data['message'];

// Send email using PHP's mail() function
$success = mail($recipient, $subject, $message);

// Return a response to the client-side JavaScript
if ($success) {
  echo 'Email sent successfully!';
} else {
  echo 'Failed to send email.';
}
?>