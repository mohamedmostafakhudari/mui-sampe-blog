import React, { useState, useEffect, useRef } from "react";
import {
	Box,
	Slide,
	Stack,
	Card,
	IconButton,
	styled,
	Container,
	Typography,
} from "@mui/material";
import {
	NavigateBefore as NavigateBeforeIcon,
	NavigateNext as NavigateNextIcon,
} from "@mui/icons-material";
import { Post, SliderPost } from "./Post";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
// // import Swiper and modules styles
// import "swiper/swiper-bundle.min.css";

import { register } from "swiper/element/bundle";
register();

const cardsPerPage = 4;
const cardsDOM = Array.from({ length: 10 }, (_, i) => <Post key={i} />);

const StyledContainer = styled(Container)(({ theme }) => ({
	padding: "5rem 0",
}));

const StyledSection = styled(Box)(({ theme }) => ({
	backgroundColor: "rgb(40,40,40)",
}));
const Carousel = () => {
	const [cards, setCards] = useState([]);
	const swiperRef = useRef(null);

	useEffect(() => {
		const swiperContainer = swiperRef.current;
		const params = {
			navigation: true,
			pagination: true,
			slidesPerView: 3,
			spaceBetween: "10",
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				375: {
					slidesPerView: 1,
				},
			},

			injectStyles: [
				`
				.swiper {
					--swiper-navigation-color: #1E90FF;
					padding-inline: 50px;
					max-width: 850px;
					}
				@media (max-width: 920px) {
					.swiper {
						max-width: 755px;
					}
				}
				@media (max-width: 768px) {
					.swiper {
						max-width: 603px;
					}
				}
				@media (max-width: 375px) {
					.swiper {
						max-width: 260px;
					}
				}
				.swiper-pagination {
					pointer-events: none;
				}

				`,
			],
			speed: "500",
			loop: "true",
			cssMode: "true",
		};

		Object.assign(swiperContainer, params);
		swiperContainer.initialize();
	}, []);

	return (
		<StyledSection
			id="featured-posts"
			as="section"
		>
			<StyledContainer>
				<Typography
					variant="h2"
					component="h2"
					align="center"
					sx={{ color: "#1E90FF" }}
					gutterBottom
				>
					Heading Text
				</Typography>

				<swiper-container
					ref={swiperRef}
					init="false"
				>
					<swiper-slide class="">
						<SliderPost />
					</swiper-slide>
					<swiper-slide class="">
						<SliderPost />
					</swiper-slide>
					<swiper-slide class="">
						<SliderPost />
					</swiper-slide>
					<swiper-slide class="">
						<SliderPost />
					</swiper-slide>
					<swiper-slide class="">
						<SliderPost />
					</swiper-slide>
					<swiper-slide class="">
						<SliderPost />
					</swiper-slide>
				</swiper-container>
			</StyledContainer>
		</StyledSection>
	);
};

export default Carousel;

{
	/* <StyledSwiper
				modules={[StyledNavigation, Pagination]}
				spaceBetween={50}
				slidesPerView={3}
				loop={true}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<Post />
				</SwiperSlide>
				<SwiperSlide>
					<Post />
				</SwiperSlide>
				<SwiperSlide>
					<Post />
				</SwiperSlide>
				<SwiperSlide>
					<Post />
				</SwiperSlide>
				<SwiperSlide>
					<Post />
				</SwiperSlide>
			</StyledSwiper> */
}

// const Carousel = () => {
// 	const [cards, setCards] = useState([]);
// 	const [currentPage, setCurrentPage] = useState(0);
// 	const [slideDirection, setSlideDirection] = useState("left");

// 	const handleNextPage = () => {
// 		setSlideDirection("left");
// 		setCurrentPage((prevPage) => prevPage + 1);
// 	};

// 	const handlePrevPage = () => {
// 		setSlideDirection("right");
// 		setCurrentPage((prevPage) => prevPage - 1);
// 	};

// 	useEffect(() => {
// 		setCards(cardsDOM);
// 	}, []);

// 	return (
// 		<Box
// 			sx={{
// 				display: "flex",
// 				flexDirection: "row",
// 				alignItems: "center",
// 				alignContent: "center",
// 				justifyContent: "center",
// 				height: "400px",
// 			}}
// 		>
// 			<IconButton
// 				onClick={handlePrevPage}
// 				sx={{
// 					margin: 5,
// 				}}
// 				disabled={currentPage === 0}
// 			>
// 				<NavigateBeforeIcon />
// 			</IconButton>
// 			<Box
// 				sx={{
// 					display: "flex",
// 					flexDirection: "row",
// 					alignItems: "center",
// 					alignContent: "center",
// 					justifyContent: "center",
// 					height: "400px",
// 				}}
// 			>
// 				{cards.map((card, index) => (
// 					<Box
// 						key={`card-${index}`}
// 						sx={{
// 							width: "100%",
// 							height: "100%",
// 							display: currentPage === index ? "block" : "none",
// 						}}
// 					>
// 						<Slide
// 							direction={slideDirection}
// 							in={currentPage === index}
// 							timeout={1000}
// 						>
// 							<Stack
// 								spacing={2}
// 								direction="row"
// 								alignContent="center"
// 								justifyContent="center"
// 							>
// 								{cards.slice(
// 									index * cardsPerPage,
// 									index * cardsPerPage + cardsPerPage
// 								)}
// 							</Stack>
// 						</Slide>
// 					</Box>
// 				))}
// 			</Box>
// 			<IconButton
// 				onClick={handleNextPage}
// 				sx={{
// 					margin: 5,
// 				}}
// 				disabled={
// 					currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
// 				}
// 			>
// 				<NavigateNextIcon />
// 			</IconButton>
// 		</Box>
// 	);
// };
