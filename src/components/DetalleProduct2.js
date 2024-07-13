import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CenteredCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto', // Centrar horizontalmente
  marginTop: '20px', // Espacio superior opcional
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function DetalleProduct2() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBuyClick = () => {
    navigate('/');
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
          title="Detalle del Encebollado"
          subheader="Enero 02, 2024"
        />
        <CardMedia
          component="img"
          height="194"
          image="/images/DetalleEncebollado.jpeg"
          alt="Encebollado dish"
        />
        <CardContent>
         
          <Typography variant="h6" color="text.primary" gutterBottom>
            $12.99
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
            Volver
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Cómo prepararlo:</Typography>
            <Typography paragraph>
              Coloca el atún y la yuca en una olla con agua y déjalos cocinar a fuego lento durante aproximadamente 30 minutos.
            </Typography>
            <Typography paragraph>
              En una sartén aparte, saltea la cebolla hasta que esté dorada. Luego, agrega las especias y mezcla bien.
            </Typography>
            <Typography paragraph>
              Sirve el encebollado caliente y disfruta de este delicioso plato lleno de sabor y tradición.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </CenteredCard>
  
 
  );
}
export default DetalleProduct2;