import {
	Box,
	Button,
	Container,
	createTheme,
	InputLabel,
	Stack,
	styled,
	TextField,
	ThemeProvider,
	Typography,
} from "@mui/material";
import React from "react";
const StyledContainer = styled(Container)(({ theme }) => ({
	padding: "5rem 0",
}));

const StyledSection = styled(Box)(({ theme }) => ({
	backgroundColor: "rgb(40,40,40)",
}));
let theme = createTheme({
	palette: {
		primary: {
			main: "#FF4500",
		},
		secondary: {
			main: "#fff",
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					color: "#fff",
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: "#fff",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					color: "#fff",
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					color: "#fff",
				},
			},
		},
	},
});

const Footer = () => {
	return (
		<ThemeProvider theme={theme}>
			<StyledSection>
				<StyledContainer>
					<Box sx={{ width: { xs: "100%", sm: "60%" } }}>
						<Typography
							variant="body2"
							gutterBottom
							sx={{ fontWeight: 600, mt: 2 }}
						>
							Join the newsletter
						</Typography>
						<Typography
							variant="body2"
							sx={{ mb: 2 }}
						>
							Subscribe for weekly updates. No spams ever!
						</Typography>
						<Stack
							direction="column"
							spacing={1}
							useFlexGap
							sx={{ alignItems: "start" }}
						>
							<InputLabel htmlFor="name-newsletter">Name</InputLabel>

							<TextField
								type="text"
								id="name-newsletter"
								hiddenLabel
								size="small"
								variant="outlined"
								fullWidth
								aria-label="Enter your name"
								placeholder="Your name"
								slotProps={{
									htmlInput: {
										autoComplete: "off",
										"aria-label": "Enter your name",
									},
								}}
								sx={{ width: "250px" }}
							/>
							<InputLabel htmlFor="email-newsletter">Email</InputLabel>
							<TextField
								type="email"
								id="email-newsletter"
								hiddenLabel
								size="small"
								variant="outlined"
								fullWidth
								aria-label="Enter your email address"
								placeholder="Your email address"
								slotProps={{
									htmlInput: {
										autoComplete: "off",
										"aria-label": "Enter your email address",
									},
								}}
								sx={{ width: "250px" }}
							/>
							<Button
								variant="contained"
								color="primary"
								size="small"
								sx={{ flexShrink: 0 }}
							>
								Subscribe
							</Button>
						</Stack>
					</Box>
				</StyledContainer>
			</StyledSection>
		</ThemeProvider>
	);
};

export default Footer;
