import React from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import books from "../../data/books";
import useStyles from "./styles";

const Books = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <GridList cellHeight={180} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {books.map(book => (
          <GridListTile key={book.img}>
            <img src={book.img} alt={book.title} />
            <GridListTileBar
              title={book.title}
              subtitle={<span>by: {book.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${book.title}`}
                  className={styles.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Books;
