import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: window.innerHeight * 0.3
  },
  media: {
    height: window.innerHeight * 0.3
  }
});

const MediaCard = ({ data1 }) => {
  const classes = useStyles();

  const { url, title } = data1;

  return (
    <Container>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="secondary">
            Like
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MediaCard;
