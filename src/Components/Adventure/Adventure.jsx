import { Button, ButtonGroup, Container, Paper , Typography, Grid } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import './Adventure.css';

const Adventure = () => {
  return (
    <>
      <Paper className='section'>
      <div className='overlay'></div>
        <Container className='text-content'>
          <Typography variant="h4" component="div" style={{padding:'20px'}}>
            Lets make your adventure!
          </Typography>
          <div className='button-container'>
            <ButtonGroup sx={{ backgroundColor: '#e63a84', '& .MuiButton-root': { color: '#fff' } }}>
              <Button startIcon={<FlightIcon />}>Air Tickets</Button>
              <Button startIcon={<HotelIcon />}>Hotel</Button>
              <Button startIcon={<BeachAccessIcon />}>Holidays</Button>
            </ButtonGroup>
          </div>
        </Container>
      </Paper>
      <div className='section_1'>
        <Container>
          <div className='btn_grp'>
            <Button sx={{ color: 'white' }}>One Way</Button>
            <Button sx={{ color: 'white' }}>Round Way</Button>
            <Button sx={{ color: 'white' }}>Multi City</Button>
          </div>
        </Container>
      </div>
     <div className='section_1'> 
     <Container style={{paddingBottom:'20px'}}>
      <Grid container spacing={1} className='grid-container'>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className='grid-item'>
            <Typography variant="h6" style={{padding: '6px'}} component="div">
            <FlightIcon /> DAC, Hazrat Shah Jalal Intl Airport
            </Typography>
          </Paper>
          <Paper className='grid-item' style={{ marginTop: '6px' , padding: '6px'}}>
            <Typography variant="h6" component="div">
            <FlightIcon /> DXB, Dubai Intl Airport
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}  md={2}>
          <Paper className='grid-item'>
            <Typography variant="h6" component="div" style={{textAlign:"center"}}>
              <CalendarMonthIcon/> AUG<br />22<br />Tuesday
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}  md={2}>
          <Paper className='grid-item'>
            <Typography variant="h6" component="div" style={{textAlign:'center'}}>
            <CalendarMonthIcon/> <br />
            Click to Return Flight
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}  md={2}>
        <Paper className='grid-item'>
            <Typography variant="h6" style={{padding: '6px',textAlign:'center'}} component="div">
             Economy
            </Typography>
          </Paper>
          <Paper className='grid-item' style={{ marginTop: '6px' , padding: '6px',textAlign:'center' }}>
            <Typography variant="h6" component="div">
            1 Passenger
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}  md={1}>
          <Paper className='grid-item'>
            <Typography variant="h6" component="div" style={{color:'#fffff',textAlign:'center', padding: '15px',backgroundColor:'#ec008c'}}>
              <SearchIcon/> <br />
              Search
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </Container>
     </div>
    </>
  );
};

export default Adventure;
