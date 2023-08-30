import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./client/src/components/assets/images/Screenshot 2023-06-15 155017.png/"
       
        title="Project #1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hang Nate 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is my first full stack application and also my first video game.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = "https://github.com/Heber-Marcano/Hang-Nate"size="small">link-to-Project</Button>
       
      </CardActions>
    </Card>
  );
}