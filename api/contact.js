const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // 1. Validation Logic
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  try {
    // 2. Nodemailer Configuration using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASS, // Use App Password here
      },
    });

    // 3. Email Options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: process.env.EMAIL_USER,    // Your receiving email address
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      text: `You have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">📧 New Contact Message</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <strong style="color: #667eea;">👤 Name:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #333;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <strong style="color: #667eea;">📧 Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <strong style="color: #667eea;">💬 Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #667eea; color: #333;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6c757d; font-size: 12px;">
            <p>This email was sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
}
