import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CenteredCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto',
  marginTop: '20px',
});



function ProductCard2() {
 
  const navigate = useNavigate();

  
  const handleBuyClick = () => {
    navigate('/detalle2');
  };

  return (
    <CenteredCard>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Encebollado"
          subheader="September 14, 20"
        />
        <CardMedia
          component="img"
          height="194"
          image="/images/encebollado.jpeg"
          alt="Encebollado dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Coloca el atún y la yuca en una olla con agua y déjalos cocinar a fuego lento durante aproximadamente 30 minutos.

          </Typography>
          <Typography variant="h6" color="text.primary" gutterBottom>
            $24.99
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={handleBuyClick}>
            Comprar
          </Button>
          
        </CardActions>
      
      </Card>
    </CenteredCard>
  );
}

export default ProductCard2;
