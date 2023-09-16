
import { Container, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import weAccept from '../../assets/we-accept-payment.png';
import './Footer.css'

const Footer = () => {
  const footerStyle = {
    padding: '10px',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#2a323c',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#293139',
    },
  };
  const imageStyle = {
   height:'70px',

  };
  return (
    <footer className="footer" style={footerStyle}>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" component="header">Services</Typography>
            <a href="#" className="link link-hover" style={linkStyle}>Branding</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Design</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Marketing</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Advertisement</a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" component="header">Company</Typography>
            <a href="#" className="link link-hover" style={linkStyle}>About us</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Contact</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Jobs</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Press kit</a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" component="header">Legal</Typography>
            <a href="#" className="link link-hover" style={linkStyle}>Terms of use</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Privacy policy</a>
            <br />
            <a href="#" className="link link-hover" style={linkStyle}>Cookie policy</a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" component="header">Follow Us</Typography>
            <div className="social-icons">
              <a href="#" className="link" style={linkStyle}>  <FacebookIcon fontSize="large" color="primary" /></a>
              <a href="#" className="link" style={linkStyle}> <TwitterIcon fontSize="large" color="primary" /></a>
              <a href="#" className="link" style={linkStyle}><LinkedInIcon fontSize="large" color="primary" /></a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography variant="h6" component="header" style={{marginTop:'10px'}}></Typography>
            <img src={weAccept} alt=""  style={imageStyle}/>
          </Grid>
        </Grid>
      </Container>
      <hr />
     <Container>
     <p className="pTag">© All Right Reserved By BRAC & Develop By Fly Far Tech</p>
     </Container>
    </footer>
  );
};

export default Footer;
