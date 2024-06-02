<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .content {
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            padding-top: 20px;
            font-size: 0.9em;
            color: #888888;
        }
        .social-icons img {
            width: 24px;
            height: 24px;
            margin: 0 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Contacting {{config('app.name')}}</h1>
        </div>
        <div class="content">
            <p>Dear,{{$name}}</p>
            <p>Thank you for reaching out to <strong>{{config('app.name')}}</strong>. We have received your message and our team is here to assist you with your query.</p>
            <h3>What happens next? {{$name}}</h3>
            <ol>
                <li><strong>Review:</strong> Our support team will review your message.</li>
                <li><strong>Response:</strong> We aim to respond to all inquiries within 24-48 hours. Please keep an eye on your email for our reply.</li>
            </ol>
            <h3>In the meantime, you can:</h3>
            <ul>
                <li><a href="[Insert FAQ Link]">Visit our FAQ page</a> - You might find the answers to your questions here.</li>
                <li><a href="[Insert Blog Link]">Browse our blog</a> - For the latest updates and tips on [related topics], check out our blog.</li>
                <li><a href="[Insert Social Media Links]">Follow us on social media</a> - Stay connected with us for the latest news and updates.</li>
            </ul>
            <p><strong>If your matter is urgent:</strong></p>
            <p>Please call our support line at <a href="tel:[Support Phone Number]">{{config('support_number')}}</a> for immediate assistance.</p>
            <p>Thank you for choosing <strong>{{config('app.name')}}</strong>. We look forward to assisting you!</p>
            <p>Best regards,<br>The {{config('app.name')}} Team</p>
        </div>
        <div class="footer">
            <p><strong>{{config('app.name')}}</strong></p>
            <p>Website: <a href="[Insert Website Link]">eurodream</a><br>
            Email: <a href="mailto:[Support Email Address]">{{config('support_email')}}</a><br>
            Phone: <a href="tel:[Support Phone Number]">{{config('support_number')}}</a><br>
            Address: {{config('location')}}</p>
            <p>Follow us on:</p>
            <p class="social-icons">
                <a href="[Facebook Link]"><img src="facebook-icon.png" alt="Facebook"></a>
                <a href="[Twitter Link]"><img src="twitter-icon.png" alt="Twitter"></a>
                <a href="[LinkedIn Link]"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                <a href="[Instagram Link]"><img src="instagram-icon.png" alt="Instagram"></a>
            </p>
            <p><em>Note: This is an automated response to acknowledge that we have received your email. Please do not reply to this email.</em></p>
        </div>
    </div>
</body>
</html>
