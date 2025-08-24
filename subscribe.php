<?php
// subscribe.php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $status = "error";
        $message = "Invalid email address. Please try again.";
    } else {
        // Email to send to
        $to = "info@mactechglobal.com";
        $subject = "New Newsletter Subscriber";
        $msg = "A new user has subscribed with the email address: " . $email;
        $headers = "From: no-reply@mactechglobal.com\r\n";
        $headers .= "Reply-To: no-reply@mactechglobal.com\r\n";

        if (mail($to, $subject, $msg, $headers)) {
            $status = "success";
            $message = "Subscription successful! Redirecting to homepage...";
        } else {
            $status = "error";
            $message = "⚠️ Failed to send subscription. Please try again later.";
        }
    }
} else {
    $status = "error";
    $message = "⚠️ Invalid request.";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscription Status</title>
    <style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f4f4f4;
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #fff;
        padding: 25px 35px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        text-align: center;
        max-width: 400px;
        width: 90%;
        animation: fadeIn 0.4s ease;
    }

    .modal.success {
        border-left: 6px solid #28a745;
    }

    .modal.error {
        border-left: 6px solid #dc3545;
    }

    h2 {
        margin: 0 0 15px;
        font-size: 20px;
    }

    p {
        font-size: 16px;
        color: #333;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    </style>
    <script>
    // Redirect in 5 seconds
    setTimeout(() => {
        window.location.href = "https://mactechglobal.com";
    }, 5000);
    </script>
</head>

<body>
    <div class="modal <?php echo $status; ?>">
        <h2><?php echo ucfirst($status); ?></h2>
        <p><?php echo $message; ?></p>
        <p style="font-size:14px; color:#666;">You will be redirected in 5 seconds...</p>
    </div>
</body>

</html>