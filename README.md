#Portfolio Site
To set up and deploy your website on GitHub Pages with a custom domain and EmailJS for handling contact forms, follow these steps:

1. Host the Website on GitHub Pages
Create a GitHub Repository:

Go to GitHub and create a new repository.
Name the repository (e.g., portfolio).
Upload Your Files:

Upload your Index.html, styles.css, and main.js files to the repository.
Make sure Index.html is in the root directory.
Enable GitHub Pages:

Go to the repository's settings.
Under the "Pages" section, set the source to main branch or gh-pages branch, and root directory.

2. Configure Custom Domain
DNS Settings:

In your domain registrar's DNS settings, add a CNAME record pointing to yourusername.github.io.
Optionally, add A records pointing to GitHub's IP addresses for better compatibility.
Add CNAME File:

In your repository, create a file named CNAME and add your custom domain (e.g., www.ratnarajivmulpuri.info).


3. EmailJS Integration
EmailJS Setup:

Sign up at EmailJS.
Create a new service and note the service ID.
Create an email template and note the template ID.
Include EmailJS Script:

Add the EmailJS script to your Index.html:

<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("YOUR_USER_ID");
    })();
</script>


Contact Form Handling:

In your main.js, set up the form submission to use EmailJS:


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            console.log('SUCCESS!');
            alert('Email sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
});


## Setup and Deployment

Hosting on GitHub Pages

1. clone the repository:

   
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio

2. Push the changes to GitHub:


git add .
git commit -m "Initial commit"
git push origin main



3. Enable GitHub Pages in the repository settings.

Custom Domain Configuration
DNS Settings:

Add a CNAME record pointing to yourusername.github.io.
Add CNAME File:

Create a CNAME file in the repository with the custom domain www.ratnarajivmulpuri.info.
Contact Form with EmailJS
EmailJS Setup:

Sign up at EmailJS.
Create a new service and email template.
Include EmailJS Script:

Add the EmailJS script to Index.html and initialize it with your user ID.
Form Submission:

Set up the form in main.js to handle submissions using EmailJS.


