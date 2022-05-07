import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						ThemePark
					</Typography>
					<Button color="inherit">Rafraîchir
						<FontAwesomeIcon icon={faArrowsRotate}/>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
