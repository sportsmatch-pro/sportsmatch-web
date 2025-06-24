export async function onRequestPost (context) {
    const formData = await context.request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const slackWebhookUrl = context.env.SLACK_WEBHOOK_URL;

    const payload = {
        text: `📬 *Nou missatge de contacte desde la web:*\n*Nom:* ${name}\n*Email:* ${email}\n*Telèfon:* ${phone}\n*Missatge:* ${message}`,
    };

    const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        return new Response('Message sent successfully!', { status: 200 });
    } else {
        return new Response('Error sending the message, please try again.', { status: 500 });
    }
}