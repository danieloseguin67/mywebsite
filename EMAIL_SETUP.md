# Email Configuration Setup

Your contact form is currently not sending actual emails because it's using a mock implementation. Here's how to set up real email functionality:

## Option 1: EmailJS (Recommended for simple websites)

EmailJS allows you to send emails directly from your frontend without needing a backend server.

### Steps to Set Up EmailJS:

1. **Create EmailJS Account**
   - Go to https://emailjs.com/
   - Sign up for a free account

2. **Add Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions for your provider

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Set up your template with these variables:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: Contact Form: {{subject}}
     
     Message:
     {{message}}
     
     Sent from: {{from_email}}
     ```

4. **Get Your Configuration Values**
   - **Public Key**: Go to "Account" > "General" > "Public Key"
   - **Service ID**: Found in your "Email Services" section
   - **Template ID**: Found in your "Email Templates" section

5. **Update Environment Files**
   
   Update `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     emailjs: {
       publicKey: 'your_actual_public_key_here',
       serviceId: 'your_actual_service_id_here',
       templateId: 'your_actual_template_id_here'
     }
   };
   ```
   
   Update `src/environments/environment.prod.ts`:
   ```typescript
   export const environment = {
     production: true,
     emailjs: {
       publicKey: 'your_actual_public_key_here',
       serviceId: 'your_actual_service_id_here',
       templateId: 'your_actual_template_id_here'
     }
   };
   ```

6. **Test Your Setup**
   - Restart your Angular development server
   - Fill out and submit your contact form
   - Check the browser console for any errors
   - Check your email inbox for the contact form submission

## Option 2: Backend API (Recommended for production)

For production websites, it's better to have a backend API handle email sending:

### Backend Setup Options:

1. **Node.js/Express with Nodemailer**
2. **ASP.NET Core with SendGrid**
3. **PHP with PHPMailer**
4. **Python/Django with SendGrid or SMTP**

### Example Backend Endpoint:
```
POST /api/send-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Contact Request",
  "message": "Hello, I'd like to get in touch..."
}
```

### Update Frontend for Backend:
In `translation.service.ts`, replace the `sendEmail` method to use the backend:

```typescript
sendEmail(emailData: EmailData): Observable<EmailResponse> {
  return this.http.post<EmailResponse>('/api/send-email', emailData);
}
```

## Troubleshooting

### Common Issues:

1. **"Email service not configured" message**
   - Make sure you've updated the environment files with your actual EmailJS values
   - Restart your development server after updating environment files

2. **CORS errors with EmailJS**
   - This shouldn't happen with EmailJS as it's designed for frontend use
   - If you see CORS errors, double-check your EmailJS configuration

3. **Emails not being received**
   - Check your spam/junk folder
   - Verify your EmailJS template is set up correctly
   - Check the browser console for errors

4. **"Failed to send email" error**
   - Check your internet connection
   - Verify your EmailJS service is active
   - Check the EmailJS dashboard for any service issues

## Security Notes

- EmailJS is safe for frontend use as it doesn't expose sensitive credentials
- For production applications with high email volume, consider a backend solution
- Never put sensitive API keys in your frontend code (EmailJS public key is safe)

## Need Help?

If you're still having issues:
1. Check the browser console for error messages
2. Test your EmailJS configuration directly on the EmailJS website
3. Make sure all environment variables are correctly set