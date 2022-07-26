
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Skeleton,Stack } from '@mui/material';
import { Row, Col, CardGroup } from 'react-bootstrap';

export default function ProductCard() {
  return (
    <>
    <h3>Mas vendidos</h3> 
    <div className="container">
    <CardGroup >
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="mueble"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mueble 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $12.000 o 6 cuotas sin interés 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="mueble"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mueble 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $12.000 o 6 cuotas sin interés 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="mueble"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mueble 3
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $12.000 o 6 cuotas sin interés 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="mueble"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mueble 4
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $12.000 o 6 cuotas sin interés 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/100"
        alt="mueble"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mueble 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $12.000 o 6 cuotas sin interés 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    </CardGroup>
    </div>
    </>
  );
}
