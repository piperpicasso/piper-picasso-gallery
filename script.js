// Global variables
let currentPage = 0;
const imagesPerPage = 8; // 4x2 grid
let autoFlipInterval = null;

// DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Piper Picasso Paintings Collection - All 170 Images
const piperPicassoPaintings = [
    // First 16 paintings (already defined)
    {
        id: 1,
        name: "Piper Picasso - Painting 1",
        src: "images/Pipper1.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 2,
        name: "Piper Picasso - Painting 2",
        src: "images/Pipper2.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 3,
        name: "Piper Picasso - Painting 3",
        src: "images/Pipper3.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 4,
        name: "Piper Picasso - Painting 4",
        src: "images/Pipper4.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 5,
        name: "Piper Picasso - Painting 5",
        src: "images/Pipper5.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 6,
        name: "Piper Picasso - Painting 6",
        src: "images/Pipper6.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 7,
        name: "Piper Picasso - Painting 7",
        src: "images/Pipper7.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 8,
        name: "Piper Picasso - Painting 8",
        src: "images/Pipper8.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 9,
        name: "Piper Picasso - Painting 9",
        src: "images/Pipper9.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 10,
        name: "Piper Picasso - Painting 10",
        src: "images/Pipper10.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 11,
        name: "Piper Picasso - Painting 11",
        src: "images/Pipper11.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 12,
        name: "Piper Picasso - Painting 12",
        src: "images/Pipper12.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 13,
        name: "Piper Picasso - Painting 13",
        src: "images/Pipper13.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 14,
        name: "Piper Picasso - Painting 14",
        src: "images/Pipper14.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 15,
        name: "Piper Picasso - Painting 15",
        src: "images/Pipper15.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 16,
        name: "Piper Picasso - Painting 16",
        src: "images/Pipper16.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    // Continue with remaining paintings (17-170)
    {
        id: 17,
        name: "Piper Picasso - Painting 17",
        src: "images/Pipper17.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 18,
        name: "Piper Picasso - Painting 18",
        src: "images/Pipper18.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 19,
        name: "Piper Picasso - Painting 19",
        src: "images/Pipper19.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 20,
        name: "Piper Picasso - Painting 20",
        src: "images/Pipper20.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 21,
        name: "Piper Picasso - Painting 21",
        src: "images/Pipper21.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 22,
        name: "Piper Picasso - Painting 22",
        src: "images/Pipper22.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 23,
        name: "Piper Picasso - Painting 23",
        src: "images/Pipper23.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 24,
        name: "Piper Picasso - Painting 24",
        src: "images/Pipper24.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 25,
        name: "Piper Picasso - Painting 25",
        src: "images/Pipper25.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 26,
        name: "Piper Picasso - Painting 26",
        src: "images/Pipper26.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 27,
        name: "Piper Picasso - Painting 27",
        src: "images/Pipper27.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 28,
        name: "Piper Picasso - Painting 28",
        src: "images/Pipper28.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 29,
        name: "Piper Picasso - Painting 29",
        src: "images/Pipper29.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 30,
        name: "Piper Picasso - Painting 30",
        src: "images/Pipper30.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 31,
        name: "Piper Picasso - Painting 31",
        src: "images/Pipper31.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 32,
        name: "Piper Picasso - Painting 32",
        src: "images/Pipper32.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 33,
        name: "Piper Picasso - Painting 33",
        src: "images/Pipper33.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 34,
        name: "Piper Picasso - Painting 34",
        src: "images/Pipper34.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 35,
        name: "Piper Picasso - Painting 35",
        src: "images/Pipper35.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 36,
        name: "Piper Picasso - Painting 36",
        src: "images/Pipper36.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 37,
        name: "Piper Picasso - Painting 37",
        src: "images/Pipper37.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 38,
        name: "Piper Picasso - Painting 38",
        src: "images/Pipper38.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 39,
        name: "Piper Picasso - Painting 39",
        src: "images/Pipper39.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 40,
        name: "Piper Picasso - Painting 40",
        src: "images/Pipper40.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 41,
        name: "Piper Picasso - Painting 41",
        src: "images/Pipper41.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 42,
        name: "Piper Picasso - Painting 42",
        src: "images/Pipper42.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 43,
        name: "Piper Picasso - Painting 43",
        src: "images/Pipper43.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 44,
        name: "Piper Picasso - Painting 44",
        src: "images/Pipper44.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 45,
        name: "Piper Picasso - Painting 45",
        src: "images/Pipper45.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 46,
        name: "Piper Picasso - Painting 46",
        src: "images/Pipper46.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 47,
        name: "Piper Picasso - Painting 47",
        src: "images/Pipper47.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 48,
        name: "Piper Picasso - Painting 48",
        src: "images/Pipper48.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 49,
        name: "Piper Picasso - Painting 49",
        src: "images/Pipper49.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 50,
        name: "Piper Picasso - Painting 50",
        src: "images/Pipper50.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 51,
        name: "Piper Picasso - Painting 51",
        src: "images/Pipper51.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 52,
        name: "Piper Picasso - Painting 52",
        src: "images/Pipper52.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 53,
        name: "Piper Picasso - Painting 53",
        src: "images/Pipper53.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 54,
        name: "Piper Picasso - Painting 54",
        src: "images/Pipper54.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 55,
        name: "Piper Picasso - Painting 55",
        src: "images/Pipper55.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 56,
        name: "Piper Picasso - Painting 56",
        src: "images/Pipper56.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 57,
        name: "Piper Picasso - Painting 57",
        src: "images/Pipper57.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 58,
        name: "Piper Picasso - Painting 58",
        src: "images/Pipper58.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 59,
        name: "Piper Picasso - Painting 59",
        src: "images/Pipper59.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 60,
        name: "Piper Picasso - Painting 60",
        src: "images/Pipper60.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 61,
        name: "Piper Picasso - Painting 61",
        src: "images/Pipper61.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 62,
        name: "Piper Picasso - Painting 62",
        src: "images/Pipper62.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 63,
        name: "Piper Picasso - Painting 63",
        src: "images/Pipper63.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 64,
        name: "Piper Picasso - Painting 64",
        src: "images/Pipper64.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 65,
        name: "Piper Picasso - Painting 65",
        src: "images/Pipper65.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 66,
        name: "Piper Picasso - Painting 66",
        src: "images/Pipper66.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 67,
        name: "Piper Picasso - Painting 67",
        src: "images/Pipper67.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 68,
        name: "Piper Picasso - Painting 68",
        src: "images/Pipper68.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 69,
        name: "Piper Picasso - Painting 69",
        src: "images/Pipper69.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 70,
        name: "Piper Picasso - Painting 70",
        src: "images/Pipper70.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 71,
        name: "Piper Picasso - Painting 71",
        src: "images/Pipper71.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 72,
        name: "Piper Picasso - Painting 72",
        src: "images/Pipper72.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 73,
        name: "Piper Picasso - Painting 73",
        src: "images/Pipper73.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 74,
        name: "Piper Picasso - Painting 74",
        src: "images/Pipper74.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 75,
        name: "Piper Picasso - Painting 75",
        src: "images/Pipper75.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 76,
        name: "Piper Picasso - Painting 76",
        src: "images/Pipper76.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 77,
        name: "Piper Picasso - Painting 77",
        src: "images/Pipper77.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 78,
        name: "Piper Picasso - Painting 78",
        src: "images/Pipper78.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 79,
        name: "Piper Picasso - Painting 79",
        src: "images/Pipper79.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 80,
        name: "Piper Picasso - Painting 80",
        src: "images/Pipper80.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 81,
        name: "Piper Picasso - Painting 81",
        src: "images/Pipper81.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 82,
        name: "Piper Picasso - Painting 82",
        src: "images/Pipper82.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 83,
        name: "Piper Picasso - Painting 83",
        src: "images/Pipper83.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 84,
        name: "Piper Picasso - Painting 84",
        src: "images/Pipper84.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 85,
        name: "Piper Picasso - Painting 85",
        src: "images/Pipper85.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 86,
        name: "Piper Picasso - Painting 86",
        src: "images/Pipper86.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 87,
        name: "Piper Picasso - Painting 87",
        src: "images/Pipper87.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 88,
        name: "Piper Picasso - Painting 88",
        src: "images/Pipper88.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 89,
        name: "Piper Picasso - Painting 89",
        src: "images/Pipper89.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 90,
        name: "Piper Picasso - Painting 90",
        src: "images/Pipper90.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 91,
        name: "Piper Picasso - Painting 91",
        src: "images/Pipper91.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 92,
        name: "Piper Picasso - Painting 92",
        src: "images/Pipper92.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 93,
        name: "Piper Picasso - Painting 93",
        src: "images/Pipper93.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 94,
        name: "Piper Picasso - Painting 94",
        src: "images/Pipper94.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 95,
        name: "Piper Picasso - Painting 95",
        src: "images/Pipper95.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 96,
        name: "Piper Picasso - Painting 96",
        src: "images/Pipper96.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 97,
        name: "Piper Picasso - Painting 97",
        src: "images/Pipper97.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 98,
        name: "Piper Picasso - Painting 98",
        src: "images/Pipper98.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 99,
        name: "Piper Picasso - Painting 99",
        src: "images/Pipper99.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 100,
        name: "Piper Picasso - Painting 100",
        src: "images/Pipper100.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 101,
        name: "Piper Picasso - Painting 101",
        src: "images/Pipper101.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 102,
        name: "Piper Picasso - Painting 102",
        src: "images/Pipper102.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 103,
        name: "Piper Picasso - Painting 103",
        src: "images/Pipper103.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 104,
        name: "Piper Picasso - Painting 104",
        src: "images/Pipper104.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 105,
        name: "Piper Picasso - Painting 105",
        src: "images/Pipper105.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 106,
        name: "Piper Picasso - Painting 106",
        src: "images/Pipper106.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 107,
        name: "Piper Picasso - Painting 107",
        src: "images/Pipper107.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 108,
        name: "Piper Picasso - Painting 108",
        src: "images/Pipper108.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 109,
        name: "Piper Picasso - Painting 109",
        src: "images/Pipper109.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 110,
        name: "Piper Picasso - Painting 110",
        src: "images/Pipper110.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 111,
        name: "Piper Picasso - Painting 111",
        src: "images/Pipper111.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 112,
        name: "Piper Picasso - Painting 112",
        src: "images/Pipper112.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 113,
        name: "Piper Picasso - Painting 113",
        src: "images/Pipper113.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 114,
        name: "Piper Picasso - Painting 114",
        src: "images/Pipper114.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 115,
        name: "Piper Picasso - Painting 115",
        src: "images/Pipper115.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 116,
        name: "Piper Picasso - Painting 116",
        src: "images/Pipper116.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 117,
        name: "Piper Picasso - Painting 117",
        src: "images/Pipper117.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 118,
        name: "Piper Picasso - Painting 118",
        src: "images/Pipper118.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 119,
        name: "Piper Picasso - Painting 119",
        src: "images/Pipper119.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 120,
        name: "Piper Picasso - Painting 120",
        src: "images/Pipper120.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 121,
        name: "Piper Picasso - Painting 121",
        src: "images/Pipper121.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 122,
        name: "Piper Picasso - Painting 122",
        src: "images/Pipper122.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 123,
        name: "Piper Picasso - Painting 123",
        src: "images/Pipper123.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 124,
        name: "Piper Picasso - Painting 124",
        src: "images/Pipper124.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 125,
        name: "Piper Picasso - Painting 125",
        src: "images/Pipper125.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 126,
        name: "Piper Picasso - Painting 126",
        src: "images/Pipper126.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 127,
        name: "Piper Picasso - Painting 127",
        src: "images/Pipper127.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 128,
        name: "Piper Picasso - Painting 128",
        src: "images/Pipper128.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 129,
        name: "Piper Picasso - Painting 129",
        src: "images/Pipper129.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 130,
        name: "Piper Picasso - Painting 130",
        src: "images/Pipper130.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 131,
        name: "Piper Picasso - Painting 131",
        src: "images/Pipper131.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 132,
        name: "Piper Picasso - Painting 132",
        src: "images/Pipper132.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 133,
        name: "Piper Picasso - Painting 133",
        src: "images/Pipper133.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 134,
        name: "Piper Picasso - Painting 134",
        src: "images/Pipper134.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 135,
        name: "Piper Picasso - Painting 135",
        src: "images/Pipper135.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 136,
        name: "Piper Picasso - Painting 136",
        src: "images/Pipper136.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 137,
        name: "Piper Picasso - Painting 137",
        src: "images/Pipper137.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 138,
        name: "Piper Picasso - Painting 138",
        src: "images/Pipper138.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 139,
        name: "Piper Picasso - Painting 139",
        src: "images/Pipper139.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 140,
        name: "Piper Picasso - Painting 140",
        src: "images/Pipper140.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 141,
        name: "Piper Picasso - Painting 141",
        src: "images/Pipper141.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 142,
        name: "Piper Picasso - Painting 142",
        src: "images/Pipper142.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 143,
        name: "Piper Picasso - Painting 143",
        src: "images/Pipper143.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 144,
        name: "Piper Picasso - Painting 144",
        src: "images/Pipper144.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 145,
        name: "Piper Picasso - Painting 145",
        src: "images/Pipper145.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 146,
        name: "Piper Picasso - Painting 146",
        src: "images/Pipper146.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 147,
        name: "Piper Picasso - Painting 147",
        src: "images/Pipper147.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 148,
        name: "Piper Picasso - Painting 148",
        src: "images/Pipper148.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 149,
        name: "Piper Picasso - Painting 149",
        src: "images/Pipper149.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 150,
        name: "Piper Picasso - Painting 150",
        src: "images/Pipper150.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 151,
        name: "Piper Picasso - Painting 151",
        src: "images/Pipper151.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 152,
        name: "Piper Picasso - Painting 152",
        src: "images/Pipper152.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 153,
        name: "Piper Picasso - Painting 153",
        src: "images/Pipper153.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 154,
        name: "Piper Picasso - Painting 154",
        src: "images/Pipper154.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 155,
        name: "Piper Picasso - Painting 155",
        src: "images/Pipper155.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 156,
        name: "Piper Picasso - Painting 156",
        src: "images/Pipper156.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 157,
        name: "Piper Picasso - Painting 157",
        src: "images/Pipper157.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 158,
        name: "Piper Picasso - Painting 158",
        src: "images/Pipper158.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 159,
        name: "Piper Picasso - Painting 159",
        src: "images/Pipper159.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 160,
        name: "Piper Picasso - Painting 160",
        src: "images/Pipper160.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 161,
        name: "Piper Picasso - Painting 161",
        src: "images/Pipper161.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 162,
        name: "Piper Picasso - Painting 162",
        src: "images/Pipper162.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 163,
        name: "Piper Picasso - Painting 163",
        src: "images/Pipper163.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 164,
        name: "Piper Picasso - Painting 164",
        src: "images/Pipper164.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 165,
        name: "Piper Picasso - Painting 165",
        src: "images/Pipper165.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 166,
        name: "Piper Picasso - Painting 166",
        src: "images/Pipper166.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 167,
        name: "Piper Picasso - Painting 167",
        src: "images/Pipper167.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 168,
        name: "Piper Picasso - Painting 168",
        src: "images/Pipper168.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 169,
        name: "Piper Picasso - Painting 169",
        src: "images/Pipper169.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    },
    {
        id: 170,
        name: "Piper Picasso - Painting 170",
        src: "images/Pipper170.png",
        year: "2024",
        description: "Original Piper Picasso artwork"
    }
];

// INSTRUCTIONS FOR ADDING YOUR OWN IMAGES:
// 1. Copy your image files to the 'images' folder
// 2. Update the 'src' paths above to match your file names
// 3. Update the 'name', 'year', and 'description' for each painting
// 4. Supported formats: JPG, PNG, GIF, WebP
// 5. Recommended size: 400x400 pixels or larger (square aspect ratio works best)

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateGallery();
    startAutoFlip();
    setupTikTokLoop();
    setupNavigationTabs();
});

// Initialize event listeners
function initializeEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener('click', () => changePage(-1));
    nextBtn.addEventListener('click', () => changePage(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Update gallery display
function updateGallery() {
    const totalPages = Math.ceil(piperPicassoPaintings.length / imagesPerPage);
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = piperPicassoPaintings.slice(startIndex, endIndex);
    
    // Create or get transition overlay
    let transitionOverlay = document.querySelector('.page-transition');
    if (!transitionOverlay) {
        transitionOverlay = document.createElement('div');
        transitionOverlay.className = 'page-transition';
        transitionOverlay.innerHTML = '<div class="loading"></div>';
        document.querySelector('.gallery-container').appendChild(transitionOverlay);
    }
    
    // Start transition
    transitionOverlay.classList.add('active');
    
    // Fade out current content
    galleryGrid.classList.add('fade-out');
    
    // Wait for fade out, then update content
    setTimeout(() => {
        // Clear gallery
        galleryGrid.innerHTML = '';
        
        // Add images to gallery
        currentImages.forEach((painting, index) => {
            const galleryItem = createGalleryItem(painting, startIndex + index);
            galleryGrid.appendChild(galleryItem);
        });
        
        // Update navigation
        updateNavigation(totalPages);
        
        // Fade in new content
        galleryGrid.classList.remove('fade-out');
        galleryGrid.classList.add('fade-in');
        
        // Remove transition overlay
        transitionOverlay.classList.remove('active');
        
        // Add fade-in animation to new items
        setTimeout(() => {
            const items = galleryGrid.querySelectorAll('.gallery-item');
            items.forEach(item => item.classList.add('fade-in'));
        }, 100);
    }, 400); // Slightly longer transition for smoother effect
}

// Create gallery item
function createGalleryItem(painting, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;
    
    const img = document.createElement('img');
    img.src = painting.src;
    img.alt = painting.name;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const title = document.createElement('h3');
    title.textContent = painting.name;
    
    const info = document.createElement('p');
    info.textContent = `${painting.year} • ${painting.description}`;
    
    overlay.appendChild(title);
    overlay.appendChild(info);
    item.appendChild(img);
    item.appendChild(overlay);
    
    // Add click event for full view
    item.addEventListener('click', () => showFullView(painting));
    
    return item;
}

// Update navigation controls
function updateNavigation(totalPages) {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= totalPages - 1;
    
    // Show/hide navigation based on content
    const hasImages = piperPicassoPaintings.length > 0;
    prevBtn.style.display = hasImages ? 'block' : 'none';
    nextBtn.style.display = hasImages ? 'block' : 'none';
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(piperPicassoPaintings.length / imagesPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 0 && newPage < totalPages) {
        currentPage = newPage;
        updateGallery();
        resetAutoFlip();
    }
}

// Handle keyboard navigation
function handleKeyboardNavigation(event) {
    switch(event.key) {
        case 'ArrowLeft':
            if (!prevBtn.disabled) changePage(-1);
            break;
        case 'ArrowRight':
            if (!nextBtn.disabled) changePage(1);
            break;
    }
}

// Auto-flip functionality
function startAutoFlip() {
    if (autoFlipInterval) clearInterval(autoFlipInterval);
    
    autoFlipInterval = setInterval(() => {
        const totalPages = Math.ceil(piperPicassoPaintings.length / imagesPerPage);
        if (totalPages > 1) {
            const nextPage = (currentPage + 1) % totalPages;
            currentPage = nextPage;
            updateGallery();
        }
    }, 5000); // Auto-flip every 5 seconds
}

function resetAutoFlip() {
    if (autoFlipInterval) {
        clearInterval(autoFlipInterval);
        startAutoFlip();
    }
}

// Show full view modal
function showFullView(painting) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = painting.src;
    img.alt = painting.name;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: none;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        z-index: 1001;
    `;
    
    const info = document.createElement('div');
    info.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
        z-index: 1001;
    `;
    
    const title = document.createElement('h3');
    title.textContent = painting.name;
    title.style.cssText = `
        margin: 0 0 10px 0;
        font-size: 1.5rem;
    `;
    
    const description = document.createElement('p');
    description.textContent = `${painting.year} - ${painting.description}`;
    description.style.cssText = `
        margin: 0;
        opacity: 0.9;
    `;
    
    info.appendChild(title);
    info.appendChild(description);
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    modal.appendChild(info);
    document.body.appendChild(modal);
    
    const closeModal = () => {
        document.body.removeChild(modal);
    };
    
    modal.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
}

// Export functions for potential external use
window.PiperPicassoGallery = {
    changePage: changePage,
    getCurrentImages: () => piperPicassoPaintings,
    getCurrentPage: () => currentPage
}; 

// Setup TikTok video looping
function setupTikTokLoop() {
    const tiktokContainer = document.getElementById('tiktokVideo');
    if (!tiktokContainer) return;
    
    const iframe = tiktokContainer.querySelector('iframe');
    if (iframe) {
        // Set up periodic restart to keep the video looping
        setInterval(() => {
            try {
                // Reload the iframe to restart the video
                const currentSrc = iframe.src;
                iframe.src = '';
                setTimeout(() => {
                    iframe.src = currentSrc;
                }, 100);
            } catch (e) {
                console.log('Video loop check completed');
            }
        }, 60000); // Restart every 60 seconds (typical TikTok video length)
    }
} 

// Setup navigation tabs
function setupNavigationTabs() {
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active tab based on scroll position
    window.addEventListener('scroll', function() {
        const aboutSection = document.getElementById('about');
        const gallerySection = document.getElementById('gallery');
        
        if (aboutSection && gallerySection) {
            const aboutTop = aboutSection.offsetTop;
            const galleryTop = gallerySection.offsetTop;
            const scrollPosition = window.scrollY + 100; // Offset for header
            
            navTabs.forEach(tab => tab.classList.remove('active'));
            
            if (scrollPosition < galleryTop) {
                document.querySelector('[data-section="about"]').classList.add('active');
            } else {
                document.querySelector('[data-section="gallery"]').classList.add('active');
            }
        }
    });
} 