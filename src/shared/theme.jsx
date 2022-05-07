import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const LightTheme = createTheme({
	palette: {
		mode: "light",
	},
});

export { LightTheme, DarkTheme };
