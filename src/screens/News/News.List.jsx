import React from "react";
import styles from "./News.Style";
import { Grid, Typography } from "@material-ui/core";
import LeftHeaderFilter from "../../components/Filters/LeftHeaderFilter/LeftHeaderFilter";
import NEWS_IMAGE from "../../assets/images/news.png";
import AVATAR_IMAGE from "../../assets/images/profile.png";
import NewsCard from "./News.Card";
import MyPagination from "../../components/Pagination/pagination";

const neswsList = [
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات .دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات دموکرات آمریکا در انتخابات ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات .دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات دموکرات آمریکا در انتخابات ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات .دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات دموکرات آمریکا در انتخابات ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات .دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات دموکرات آمریکا در انتخابات ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
];

const sideNewsList = [
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
  {
    title: "موج سوم کرونا چه تأثیری میتواند بر کشور داشته باش؟",
    author: "مصطفی افخمی",
    date: "یکشنبه 26/6/1397",
    body:
      "دور از انتظار نیست که جو بایدن نامزد کنونی حزب دموکرات آمریکا در انتخابات . دور از انتظار نیست که جو بایدن نامزد کنونی حزب ",
    image: NEWS_IMAGE,
    link: "#",
    avatar: AVATAR_IMAGE,
  },
];

const NewsList = function (props) {
  const classes = styles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} className="right">
        <Grid className="box" />
        <Grid className="box" />
        <Grid item className="content">
          <Grid className="caption">
            <Typography variant="button">تازه های خبری</Typography>
          </Grid>
          {sideNewsList.map((news, index) => {
            return <NewsCard key={index} item={news} inbox />;
          })}
        </Grid>
        <Grid item className="content">
          <Grid className="caption">
            <Typography variant="button">اخبار موسسات و آموزشگاه ها</Typography>
          </Grid>
          {sideNewsList.map((news, index) => {
            return <NewsCard key={index} item={news} inbox />;
          })}
        </Grid>
      </Grid>
      <Grid item xs={9} className="left">
        <Grid className={classes.filter}>
          <LeftHeaderFilter />
        </Grid>
        <Grid className="content">
          {neswsList.map((news, index) => {
            return <NewsCard key={index} item={news} />;
          })}
        </Grid>
        <Grid className="pagination">
          <MyPagination />
        </Grid>
        <Grid className="box" />
      </Grid>
    </Grid>
  );
};

export default NewsList;
