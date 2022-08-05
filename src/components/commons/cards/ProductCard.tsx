import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  title: string;
}

export const ProductCard = ({ title }: ProductCardProps) => {
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
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
};
