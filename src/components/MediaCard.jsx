import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 570,
  },
  darkTheme: {
      backgroundColor: '#333',
      color: '#fff'
  }
});

export default function MediaCard({book, removeBook}) {
  const classes = useStyles();
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
      setIsDarkTheme(!isDarkTheme)
  }

  return (
    <Grid item>
        <Card m={5} md={4} sm={6} xs={12} className={classes.root}>
          <CardActionArea onClick={toggleDarkTheme}>
            <CardMedia
              className={classes.media}
              image={book.image}
              title="Contemplative Reptile"
            />
            <CardContent className={isDarkTheme ? classes.darkTheme : ''}>
              <Typography gutterBottom variant="h5" component="h2">
                {book.title}
              </Typography>
              <Typography variant="h6">
                  {book.author}
              </Typography>
              <Typography className={isDarkTheme ? classes.darkTheme : ''} variant="body2" color="textSecondary" component="p">
                {book.desc}
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => removeBook(book.id)} size="small" color="secondary">
              Remove
            </Button>
          </CardActions>
        </Card>
    </Grid>
  );
}
