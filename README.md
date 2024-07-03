# Email Service

This project is a simple email service that sends emails to an admin and acknowledgements to the sender using custom templates.

## Features

- Sends an email to the admin when a new message is received.
- Sends an acknowledgement email to the sender with a custom template.
- Uses environment variables for configuration, ensuring security of sensitive information.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dhruv35M/email-service.git
   cd email-service
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a .env file in the root directory of your project with the following variables:

   ```bash
   EMAIL_SERVICE=Gmail
   EMAIL_USER=YOUR_EMAIL
   EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD
   ADMIN_EMAIL=admin@example.com
   ```

   Replace YOUR_EMAIL with your actual Gmail address. For YOUR_EMAIL_PASSWORD, it's recommended to use a Gmail app password instead of your actual Gmail account password. Generate a Gmail app password if you haven't already.

4. **Run the service:**

   ```bash
   npm start
   ```

## Customization

Email Templates:

- Customize the email templates in the templates directory as per your requirements.
- Update the HTML and CSS files in the templates directory to match your branding and messaging style.

## Notes

- This project assumes Node.js and npm are installed on your system.

- Customize the email templates and styles to match your branding and communication needs.

## License

This project is licensed under the [MIT License](LICENSE).

---

Stay connected, keep coding 🚀👨‍💻
