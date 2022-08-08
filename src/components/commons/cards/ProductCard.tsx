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
    <Card sx={{ width: "300px" }}>
      <CardMedia
        component="img"
        image="https://dummyimage.com/150x150/fff/aaa"
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/product/${code}`, { replace: true })}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};
