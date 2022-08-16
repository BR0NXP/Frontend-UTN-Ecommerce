import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  title: string;
  code: string;
}

export const ProductCard = ({ title, code }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "15rem", margin: "7px"}}
    style={{backgroundColor: "#0052cc" }}
    >
      <CardMedia
        component="img"
        image="https://dummyimage.com/150x150/fff/aaa"
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>
            <h5>super desripcion </h5>            
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/product/${code}`, { replace: true })}
          style={{ backgroundColor: "white"}}
        >
          Ver más
        </Button>
        <Button
            size="small"
            style={{ backgroundColor:"white"}}  
        >
          Agregar al carrito 
        </Button>
      </CardActions>
      
    </Card>
  );
};
