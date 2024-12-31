import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Overlay from "./utils/Overlay";

const Hero = () => {
	return (
		<Box
			id="hero"
			sx={(theme) => ({
				width: "100%",
				height: "80dvh",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundImage: "url('/assets/images/hero-background.jpeg')",
				position: "relative",
			})}
		>
			<Overlay />
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					pt: { xs: 14, sm: 20 },
					pb: { xs: 8, sm: 12 },
					height: "100%",
				}}
			>
				<Box
					sx={{
						position: "relative",
						zIndex: "1",
					}}
				>
					<Typography
						variant="h1"
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							alignItems: "center",
							fontSize: "clamp(3rem, 10vw, 3.5rem)",
						}}
					>
						Lorem,&nbsp;ipsum&nbsp;
						<Typography
							component="span"
							variant="h1"
							sx={(theme) => ({
								fontSize: "inherit",
								color: "#1E90FF",
								...theme.applyStyles("dark", {
									color: "primary.light",
								}),
							})}
						>
							dolor.
						</Typography>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
