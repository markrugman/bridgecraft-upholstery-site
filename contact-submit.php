<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.html');
    exit;
}

function field(string $name): string
{
    return trim((string)($_POST[$name] ?? ''));
}

function clean_header(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

$name = field('name');
$phone = field('phone');
$email = field('email');
$message = field('message');
$company = field('company');

if ($company !== '') {
    header('Location: thank-you.html');
    exit;
}

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: contact.html?status=error');
    exit;
}

$to = 'info@bridgecraftupholstery.co.uk';
$safeName = clean_header($name);
$safeEmail = clean_header($email);
$subject = 'Bridgecraft Upholstery enquiry from ' . $safeName;

$body = implode("\n", [
    'New enquiry from the Bridgecraft Upholstery website.',
    '',
    'Name: ' . $name,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Email: ' . $email,
    '',
    'Query:',
    $message,
]);

$headers = [
    'From: Bridgecraft Upholstery Website <info@bridgecraftupholstery.co.uk>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    header('Location: thank-you.html');
    exit;
}

header('Location: contact.html?status=send-error');
exit;
