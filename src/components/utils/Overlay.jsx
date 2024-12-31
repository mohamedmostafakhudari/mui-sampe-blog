import { Box } from "@mui/material";
import React from "react";

const Overlay = () => {
	return (
		<Box
			sx={(theme) => ({
				position: "absolute",
				zIndex: "0",
				inset: "0",
				height: "100%",
				backgroundColor: "rgb(0 0 0 / 30%)",
			})}
		/>
	);
};

export default Overlay;
