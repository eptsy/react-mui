import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AvatarGroup from "@mui/material/AvatarGroup";

import {
  deepOrange,
  deepPurple,
  green,
  indigo,
  red,
} from "@mui/material/colors";
const label = { inputProps: { "aria-label": "Switch demo" } };

function valuetext(value) {
  return `${value}°C`;
}
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
export default function App() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={150}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color={"secondary"}
      />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} />
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Android 12"
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        style={{ "margin-top": "20px" }}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        style={{ "margin-top": "20px" }}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        style={{ "margin-top": "20px" }}
      />
      <AvatarGroup total={25} style={{ "margin-top": "20px" }}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>I</Avatar>
        <Avatar sx={{ bgcolor: indigo[500] }}>So</Avatar>
      </AvatarGroup>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </Box>
  );
}
