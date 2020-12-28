import React from "react";
import styles from "./News.Style";
import { Grid, Typography } from "@material-ui/core";

const NewsCard = function ({ item, inbox }) {
  const { title, author, date, body, image, link, avatar } = item;
  const classes = styles();

  return (
    <Grid container className={classes.card}>
      {!inbox && (
        <Grid className="right">
          <img alt="image" src={image} />
        </Grid>
      )}
      <Grid className="left">
        <Grid className="title">
          <Typography variant="h3">{title} </Typography>
        </Grid>

        <Grid className="subTitle">
          <img alt="avatar" src={avatar} />
          <Typography variant="subtitle1">{author} </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {date}{" "}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            اشتراک گذاری
          </Typography>
        </Grid>
        <Grid className="body">
          {inbox && <img alt="image" src={image} />}
          <Typography variant="caption">{body} </Typography>
        </Grid>
        <Grid className="footer">
       
          <Typography variant="subtitle1">
            <i></i>
            ادامه خبر
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsCard;
