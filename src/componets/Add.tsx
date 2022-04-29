import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

interface IAddProps {}

const UserBox = styled(Box)({
  gap: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "10px 20px",
});

const Add: React.FunctionComponent<IAddProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add message"
        sx={{ position: "fixed", bottom: "30px" }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          sx={{
            backgroundColor: "background.default",
            width: 400,
            height: 280,
            borderRadius: "10px",
            color:"text.primary"
          }}
        >
          <Typography variant="h6" fontWeight={100} textAlign={"center"}>
            {" "}
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Cindy Baker"
              src="https://www.pngfind.com/pngs/m/4-48198_business-man-business-man-face-png-transparent-png.png"
            />
            <Typography variant="h6">Quado</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", marginTop: "10px" }}
            id="outlined-multiline-flexible"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
            onChange={() => "nothing"}
            
          />

          <Stack direction="row" gap={1} m="10px 20px" mt="5px">
            <EmojiEmotions color="secondary" />
            <Image color="primary" />
            <VideoCameraBack color="error" />
            <PersonAdd sx={{ color: "green" }} />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width: "100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Stack>
      </Modal>
    </>
  );
};

export default Add;
