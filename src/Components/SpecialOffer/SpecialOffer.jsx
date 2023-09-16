
import { Button, Container, Grid, Typography } from "@mui/material";
import flight3 from '../../assets/flight3.jpg';
import flight4 from '../../assets/flight4.jpg';
import flight5 from '../../assets/flight5.jpg';
import './SpecialOffer.css'

const SpecialOffer = () => {
  const circularButtonStyle = {
    borderRadius: '20%',
    fontWeight: 'bold',
    color: '#eb61b3',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const imageStyle = {
    flex: '1',
    width: '100%',
    borderRadius: '20px',
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
              <Button key="one" sx={circularButtonStyle}>View All</Button>
            </Grid>
          </Grid>
        </Container>
        <Container className='cardImages' style={{ marginTop: '30px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <div style={imageContainerStyle}>
                <img src={flight3} alt="Flight" style={imageStyle} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <div style={imageContainerStyle}>
                <img src={flight4} alt="Flight" style={imageStyle} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <div style={imageContainerStyle}>
                <img src={flight5} alt="Flight" style={imageStyle} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffer;
