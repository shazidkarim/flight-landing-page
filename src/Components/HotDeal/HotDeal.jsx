
import { Button, ButtonGroup, Container, Typography, Grid } from '@mui/material';
import './HotDeal.css';
import flightImage from '../../assets/flight1.jpg';
import flightImage1 from '../../assets/flight2.jpg';

const HotDeal = () => {
  
  const circularButtonStyle = {
    borderRadius: '20%',
    fontWeight: 'bold',
    color: '#eb61b3',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    borderRadius: '20px',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '20px',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(236, 0, 140, 0.6) 20%, rgba(236, 0, 140, 0) 100%)', 
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <>
      <div className='main'>
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5" component="div">
                Hot Deals
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup color="secondary" aria-label="medium secondary button group">
                <Button key="one" sx={circularButtonStyle}>All</Button>
                <Button key="two" sx={circularButtonStyle}>Flight</Button>
                <Button key="three" sx={circularButtonStyle}>Hotel</Button>
                <Button key="four" sx={circularButtonStyle}>Tour</Button>
                <Button key="five" sx={circularButtonStyle}>Others</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
        <Container className='cardImages' style={{ marginTop: '30px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div style={imageContainerStyle}>
                <img src={flightImage} alt="Flight" style={imageStyle} />
                <div style={overlayStyle}></div>
                <div style={textStyle}>Get Air Tickets At Lowest Price</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div style={imageContainerStyle}>
                <img src={flightImage1} alt="Flight" style={imageStyle} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HotDeal;
