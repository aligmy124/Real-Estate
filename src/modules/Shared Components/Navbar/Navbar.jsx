import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", link: "/" },
          { text: "Card", link: "/Card" },
          { text: "Send email", link: "/send-email" },
          { text: "Drafts", link: "/drafts" }
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}> {/* استخدام Link */}
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "All mail", link: "/all-mail" },
          { text: "Trash", link: "/trash" },
          { text: "Spam", link: "/spam" }
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}> {/* استخدام Link */}
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#000"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="#000"
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#000" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </Box>
  );
}
