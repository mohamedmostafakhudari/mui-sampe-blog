import { Box, Container, Grid2, styled, Typography } from "@mui/material";
import React from "react";
import { Post } from "./Post";
const StyledContainer = styled(Container)(({ theme }) => ({
	padding: "5rem 0",
}));

const StyledSection = styled(Box)(({ theme }) => ({
	backgroundColor: "#F5F5DC",
}));

const Posts = () => {
	return (
		<StyledSection
			id="posts"
			as="section"
		>
			<StyledContainer>
				<Typography
					variant="h2"
					component="h2"
					align="center"
					sx={{}}
					gutterBottom
				>
					Heading Text
				</Typography>
				<Grid2
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{Array.from(Array(8)).map((_, index) => (
						<Grid2
							key={index}
							size={{ xs: 4, sm: 4, md: 4 }}
						>
							<Post />
						</Grid2>
					))}
				</Grid2>
			</StyledContainer>
		</StyledSection>
	);
};

export default Posts;
