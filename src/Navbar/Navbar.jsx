import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import './Navbar.css';
import logo from '../assets/brac.png'

function Navbar() {
    const appBarStyle = {
        backgroundColor: '#ec008c', 
      };
  return (
    <AppBar position="static" style={appBarStyle}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div">
            <img src={logo} alt="Logo" height={80} />
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
