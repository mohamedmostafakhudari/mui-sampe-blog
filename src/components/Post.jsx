import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	styled,
	Typography,
} from "@mui/material";
import React from "react";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

const PostContent = () => {
	return (
		<React.Fragment>
			<CardMedia
				sx={{ height: 140 }}
				image="https://picsum.photos/200/300"
				title="green iguana"
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
				>
					Post Title
				</Typography>
				<Typography
					variant="body2"
					sx={{ color: "text.secondary" }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus tempore nulla laudantium sequi consectetur enim
					repellat temporibus veniam natus perspiciatis!
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					href="#"
				>
					Learn More
				</Button>
			</CardActions>
		</React.Fragment>
	);
};

const postDefaultStyles = {
	borderRadius: "25px",
	backgroundColor: "#fff",
};
const Post = () => {
	return (
		<Card sx={{ ...postDefaultStyles, width: { sm: "320px" } }}>
			<PostContent />
		</Card>
	);
};
const SliderPost = () => {
	return (
		<Card sx={{ ...postDefaultStyles, width: "100%" }}>
			<PostContent />
		</Card>
	);
};

export { Post, SliderPost };
