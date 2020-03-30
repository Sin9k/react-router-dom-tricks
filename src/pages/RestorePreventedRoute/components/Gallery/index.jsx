import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import gallery from "../../data/gallery";

const Gallery = () => {
  return (
    <Grid container wrap="nowrap">
      {gallery.map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          <img
            style={{ width: 210, height: 118 }}
            alt={item.title}
            src={item.src}
          />

          <Box pr={2}>
            <Typography gutterBottom variant="body2">
              {item.title}
            </Typography>
            <Typography display="block" variant="caption" color="textSecondary">
              {item.channel}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {`${item.views} • ${item.createdAt}`}
            </Typography>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default Gallery;
