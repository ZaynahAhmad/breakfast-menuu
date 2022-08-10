import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
    <Toolbar>
    <Typography variant="h6" color="secondary" noWrap>
    
      </Typography>
    </Toolbar>
  </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Only Desserts!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Zay's Bakery makes extraordinary desserts, shakes/refreshers, and sandwiches it is ways to good to simply skip over it while walking pass.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={3}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={require("/workspace/breakfast-menuu/menu/src/vegan-cupcakes1-scaled.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Vanilla Cupcakes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cupcakes continue to be popular treat, whether made at home or purchased at a store. Their small size makes them appealing to people who want to eat some cake, but don’t want to purchase an entire cake.                                                                                                         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Deals</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://goodiesbyanna.typepad.com/.a/6a013486ea23b7970c0168e9093668970c-600wi"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chocolate Cakepops
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A small round piece of cake coated with icing or chocolate and fixed on the end of a stick-resembling a lollipop.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Deals</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://th.bing.com/th/id/OIP.mvIB97BCJ4v5Rgth8dIUKQHaHa?pid=ImgDet&rs=1"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Red Velvet Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A red, red-brown, crimson, or scarlet-colored chocolate layer cake, layered with ermine icing
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://photos-cdn.catchmyparty.com/PL/photos/0055/2035/770.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Red Velvet Cakepops
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A small round piece of cake coated with icing or chocolate and fixed on the end of a stick-resembling a lollipop.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Deal</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={8}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://th.bing.com/th/id/OIP.9RbSHAR7qKvA9fVd_Bt-2AHaHa?pid=ImgDet&rs=1"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Marble Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A mixture of vanilla and chocolate cake, in which case it is mainly vanilla, with streaks of chocolate
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>

      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://th.bing.com/th/id/R.292caa85167a80ea5d1fd0a7237e1bb7?rik=Bav6%2bXI3u%2fIGKg&pid=ImgRaw&r=0"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          7 Up Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The cake is already fantastic on its own, but it’s taken to another level by the sugar glaze.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
       
      </Grid>

    </Box>
        

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}