import * as React from "react";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import Post from "./Post";
import Add from "./Add";
interface IFeedProps {}

const Feed: React.FunctionComponent<IFeedProps> = (props) => {
  return (
    <Stack flex={4} alignItems={"center"} >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Add />
    </Stack>
  );
};

export default Feed;
