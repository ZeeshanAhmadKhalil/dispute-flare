import { randomIntFromInterval } from '@Config/helper';
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        selectedTheme: randomIntFromInterval(1, 29),
        themes: [
            {
                id: 0,
                imagePath: "/Assets/Images/default.jpeg",
                name: "Default",
            },
            {
                id: 1,
                imagePath: "/Assets/Images/default.png",
                name: "Clouds",
            },
            {
                id: 2,
                imagePath: "/Assets/Images/grass-ears.jpg",
                name: "Grass Ears",
            },
            {
                id: 3,
                imagePath: "/Assets/Images/atmosphere.jpg",
                name: "Atmosphere",
            },
            {
                id: 4,
                imagePath: "/Assets/Images/paradise.jpg",
                name: "Paradise",
            },
            {
                id: 5,
                imagePath: "/Assets/Images/village.jpg",
                name: "Village",
            },
            {
                id: 6,
                imagePath: "/Assets/Images/beach.jpg",
                name: "Beach",
            },
            {
                id: 7,
                imagePath: "/Assets/Images/sea-sunset.jpg",
                name: "Sea Sunset",
            },
            {
                id: 8,
                imagePath: "/Assets/Images/snow-village.jpg",
                name: "Snow Village",
            },
            {
                id: 9,
                imagePath: "/Assets/Images/meditation.jpg",
                name: "Meditation",
            },
            {
                id: 10,
                imagePath: "/Assets/Images/architecture.jpg",
                name: "Architecture",
            },
            {
                id: 11,
                imagePath: "/Assets/Images/wall.jpg",
                name: "Wall",
            },
            {
                id: 12,
                imagePath: "/Assets/Images/flower.jpg",
                name: "Flower",
            },
            {
                id: 13,
                imagePath: "/Assets/Images/metro.jpg",
                name: "Metro",
            },
            {
                id: 14,
                imagePath: "/Assets/Images/shining.jpg",
                name: "Shining",
            },
            {
                id: 15,
                imagePath: "/Assets/Images/stars.jpg",
                name: "Stars",
            },
            {
                id: 16,
                imagePath: "/Assets/Images/clouds.jpg",
                name: "Clouds",
            },
            {
                id: 17,
                imagePath: "/Assets/Images/canyon.jpg",
                name: "Canyon",
            },
            {
                id: 18,
                imagePath: "/Assets/Images/valley.jpg",
                name: "Valley",
            },
            {
                id: 19,
                imagePath: "/Assets/Images/leafs.jpg",
                name: "Leafs",
            },
            {
                id: 20,
                imagePath: "/Assets/Images/ice.jpg",
                name: "Ice",
            },
            {
                id: 21,
                imagePath: "/Assets/Images/desert.jpg",
                name: "Desert",
            },
            {
                id: 22,
                imagePath: "/Assets/Images/flower-and-leafs.jpg",
                name: "Flower And Leafs",
            },
            {
                id: 23,
                imagePath: "/Assets/Images/lion-cubs.jpg",
                name: "Lion Cubs",
            },
            {
                id: 24,
                imagePath: "/Assets/Images/mountains.jpg",
                name: "Mountains",
            },
            {
                id: 25,
                imagePath: "/Assets/Images/pink-fencer.jpg",
                name: "Pink Fencer",
            },
            {
                id: 26,
                imagePath: "/Assets/Images/cloud-sea.jpg",
                name: "Cloud Sea",
            },
            {
                id: 27,
                imagePath: "/Assets/Images/grass.jpg",
                name: "Grass",
            },
            {
                id: 28,
                imagePath: "/Assets/Images/tulips.jpg",
                name: "Tulips",
            },
            {
                id: 29,
                imagePath: "/Assets/Images/sunset.jpg",
                name: "Sunset",
            },
        ],
    },
    reducers: {
        setSelectedTheme: (state, action) => {
            state.selectedTheme = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setSelectedTheme
} = themeSlice.actions;

export default themeSlice.reducer;