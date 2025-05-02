import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
type Props = {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode:boolean;
  };



export default function NavBar({darkMode,setDarkMode }: Props) {
    function handleClick(){
        setDarkMode(prev=>!prev)
    }



  return (
    <div>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Re-Store</Typography>
                <IconButton onClick={handleClick}>{darkMode?<LightMode/>:<DarkMode/>}</IconButton>
            </Toolbar>
        </AppBar>
    </div>
  )
}