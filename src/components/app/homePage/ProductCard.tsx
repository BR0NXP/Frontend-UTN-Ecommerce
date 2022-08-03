
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Skeleton,Stack } from '@mui/material';
import { Row, Col, CardGroup } from 'react-bootstrap';
import { SingleProduct } from '../../../models/products/singleProduct';

type Props = {
  products: ProductsPage;
  handleAddToCart: (product: Products) => void 
  
}

export const ProductCard = ({ product }: Props ) => {
  return (
    <>
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
    </CardGroup>
    </div>
    </>
  );
}
