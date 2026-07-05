// server.js - Backend server for handling contact form emails
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // React app origins
    methods: ['POST'],
    credentials: true
}));

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_APP_PASSWORD;

// Create reusable transporter object using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Contact form email endpoint matches Vercel serverless API
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Please provide name, email, and message'
        });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a valid email address'
        });
    }

    try {
        // Email to you (the portfolio owner)
        const mailOptions = {
            from: `"Portfolio Contact Form" <${EMAIL_USER}>`,
            to: EMAIL_USER, // hammadalamgir778@gmail.com
            replyTo: email, // Sender's email for easy reply
            subject: subject ? `📩 ${subject} — from ${name}` : `📩 Portfolio Contact from ${name}`,
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
              ${subject ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <strong style="color: #667eea;">📌 Subject:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #333;">
                  ${subject}
                </td>
              </tr>` : ''}
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
            text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n${subject ? `Subject: ${subject}\n` : ''}Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        console.log(`✅ Email sent successfully from ${email}`);
        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send email. Please try again later.'
        });
    }
});

// Start server
// We force 3034 here to avoid colliding with React which uses PORT=3033 from .env
const PORT = 3034;
app.listen(PORT, () => {
    console.log(`
  🚀 Email Server is running!
  📍 Local: http://localhost:${PORT}
  📧 Sending to: ${EMAIL_USER}
  `);

    if (!EMAIL_PASS) {
        console.warn('⚠️  WARNING: EMAIL_APP_PASSWORD is not set in .env file');
        console.warn('   Please create a .env file with your Gmail App Password');
    }
});
