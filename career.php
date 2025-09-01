<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
    $vacancy = filter_var(trim($_POST['vacancy']), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['status' => 'error', 'message' => 'Resume upload failed.']);
        exit;
    }

    $file_tmp = $_FILES['resume']['tmp_name'];
    $file_name = $_FILES['resume']['name'];
    $file_type = $_FILES['resume']['type'];
    $file_content = chunk_split(base64_encode(file_get_contents($file_tmp)));

    $to = "info@mactechglobal.com, info@mactechglobal.co.uk";
    $subject = "New Career Application: $vacancy";

    $boundary = md5(time());
    $headers = "From: $name <$email>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= "Name: $name\nEmail: $email\nPhone: $phone\nVacancy: $vacancy\nMessage:\n$message\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $file_content . "\r\n";
    $body .= "--$boundary--";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Application submitted successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send application.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request.']);
}
?>