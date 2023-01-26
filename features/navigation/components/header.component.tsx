import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { config } from "../../../configs/config";
import { menuConfig } from "../configs/menu.config";
import { useRouter } from "next/router";

type Props = {
  setIsSideBarOpen: (isSideBarOpen: boolean) => void;
};

export const HeaderComponent: React.FC<Props> = ({ setIsSideBarOpen }) => {
  const router = useRouter();
  return (
    <header className="hide-print">
      <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
        <AppBar position="fixed">
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  setIsSideBarOpen(true);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                {config.siteName}
              </Typography>
              {menuConfig.topMenu.map((menuItem) => (
                <IconButton key={menuItem.title} href={menuItem.link}>
                  <menuItem.icon sx={{marginRight: 1}} />
                </IconButton>
              ))}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </header>
  );
};