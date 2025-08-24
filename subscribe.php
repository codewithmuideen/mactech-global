<?php
// subscribe.php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error";
        exit;
    }

    $file = "subscribers.txt";

    // Create file if not exists
    if (!file_exists($file)) {
        file_put_contents($file, "");
    }

    $subscribers = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    if (in_array(strtolower($email), array_map("strtolower", $subscribers))) {
        echo "already"; // duplicate
        exit;
    }

    // Save email
    file_put_contents($file, $email . PHP_EOL, FILE_APPEND);

    // Send notification to admin
    $to = "info@mactechglobal.com";
    $subject = "New Newsletter Subscriber";
    $message = "A new user has subscribed with the email address: " . $email;
    $headers = "From: no-reply@mactechglobal.com\r\n";
    $headers .= "Reply-To: no-reply@mactechglobal.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}