import { TextField, Button, Stack } from '@mui/material';
import '../styles/pagecss/contact.css';
import Navbar from '../components/Navbar';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or connect on social media. You can leave a message here as well!</p>

      <div className="contact-info">
        <p>Email: <a href="mailto:yusiangchong@outlook.com">yusiangchong@outlook.com</a></p>
        <p>Phone: <a href="tel:+6581820460">+65 81820460</a></p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/chong-yu-siang-050247349/" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/chong-yu-siang-050247349
          </a>
        </p>
        <p>
          GitHub: <a href="https://github.com/AlasamAkkit" target="_blank" rel="noopener noreferrer">
            github.com/AlasamAkkit
          </a>
        </p>
      </div>

      <Stack component="form" spacing={2} className="contact-form">
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" type="email" fullWidth />
        <TextField label="Message" variant="outlined" multiline rows={5} fullWidth />
        <Button variant="contained" color="primary" type="submit" className="submit-button">
          Send Message
        </Button>
      </Stack>
    </div>
  );
};

export default ContactMe;
