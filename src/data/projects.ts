export interface Video {
  id: string;
  title: string;
  bunnyVideoId: string; // Bunny.net video ID
  bunnyLibraryId: string; // Your Bunny.net library ID
  thumbnail?: string; // Optional custom thumbnail (will use auto-generated if not provided)
  duration?: string; // e.g., "2:30"
  description?: string;
  credits: {
    [key: number]: {
      title: string;
      name: string;
    };
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  thumbnails: string[]; // Array of thumbnail paths (fallback if no video thumbnails)
  videos: Video[]; // Array of videos for this project
  description?: string;
  featured?: boolean; // Whether to show on homepage
}

// Your project data - updated to use manual credits structure
export const projects: Project[] = [
  {
    id: "adrian-milanio",
    title: "Adrian Milanio",
    slug: "adrian-milanio",
    client: "Adrian Milanio",
    thumbnails: [
      "/images/projects/thumbnails/adrian-1.png",
      "/images/projects/thumbnails/adrian-2.png",
      "/images/projects/thumbnails/adrian-3.png",
      "/images/projects/thumbnails/adrian-4.png",
      "/images/projects/thumbnails/adrian-5.png",
      "/images/projects/thumbnails/adrian-6.png",
    ],
    videos: [
      {
        id: "adrian-alone",
        title: "Adrian Milanio - All Alone",
        bunnyVideoId: "efd61be6-5b9b-4108-af09-591be75f8371",
        bunnyLibraryId: "468791",
        duration: "2:06",
        credits: {
          1: {
            title: "Director",
            name: "Marco Gutierrez",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Talent",
            name: "Adrian Milanio",
          },
          4: {
            title: "Client",
            name: "Adrian Milanio",
          },
          5: {
            title: "Year",
            name: "2024",
          },
        },
      },
      {
        id: "adrian-over",
        title: "Adrian Milanio - Over and Over",
        bunnyVideoId: "97720321-a326-4f3c-8e21-35ad59d94063",
        bunnyLibraryId: "468791",
        duration: "1:57",
        credits: {
          1: {
            title: "Director",
            name: "Marco Gutierrez",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Talent",
            name: "Adrian Milanio",
          },
          4: {
            title: "Client",
            name: "Adrian Milanio",
          },
          5: {
            title: "Year",
            name: "2024",
          },
        },
      },
    ],
    featured: true,
  },
  {
    id: "brudi-brothers",
    title: "Brudi Brothers",
    slug: "brudi-brothers",
    client: "Brudi Brothers",
    thumbnails: [
      "/images/projects/thumbnails/brudi-brothers-1.png",
      "/images/projects/thumbnails/brudi-brothers-2.png",
      "/images/projects/thumbnails/brudi-brothers-3.png",
      "/images/projects/thumbnails/brudi-brothers-4.png",
      "/images/projects/thumbnails/brudi-brothers-5.png",
      "/images/projects/thumbnails/brudi-brothers-6.png",
    ],
    videos: [
      {
        id: "brudi-cowboy",
        title: "Brudi Brothers - Me More Cowboy",
        bunnyVideoId: "f6faeee1-5c24-40b1-9d37-07f5450246df",
        bunnyLibraryId: "468791",
        duration: "2:48",
        credits: {
          1: {
            title: "Director",
            name: "Brudi Brothers",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Producer",
            name: "Marco Gutierrez",
          },
          4: {
            title: "Talent",
            name: "Brudi Brothers",
          },
          5: {
            title: "Client",
            name: "Brudi Brothers",
          },
          6: {
            title: "Year",
            name: "2024",
          },
        },
      },
      {
        id: "brudi-seal",
        title: "Brudi Brothers - Super Seal",
        bunnyVideoId: "22171579-7fb1-49ef-9c86-0ee6ef3ef3a3",
        bunnyLibraryId: "468791",
        duration: "3:23",
        credits: {
          1: {
            title: "Director",
            name: "Brudi Brothers",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Producer",
            name: "Marco Gutierrez",
          },
          4: {
            title: "Talent",
            name: "Brudi Brothers",
          },
          5: {
            title: "Client",
            name: "Brudi Brothers",
          },
          6: {
            title: "Year",
            name: "2024",
          },
        },
      },
    ],
    featured: true,
  },
  {
    id: "filson",
    title: "Filson",
    slug: "filson",
    client: "Filson",
    thumbnails: [
      "/images/projects/thumbnails/filson-1.png",
      "/images/projects/thumbnails/filson-2.png",
      "/images/projects/thumbnails/filson-3.png",
      "/images/projects/thumbnails/filson-4.png",
      "/images/projects/thumbnails/filson-5.png",
      "/images/projects/thumbnails/filson-6.png",
      "/images/projects/thumbnails/filson-7.png",
      "/images/projects/thumbnails/filson-8.png",
      "/images/projects/thumbnails/filson-9.png",
      "/images/projects/thumbnails/filson-10.png",
      "/images/projects/thumbnails/filson-11.png",
      "/images/projects/thumbnails/filson-12.png",
      "/images/projects/thumbnails/filson-16.png",
      "/images/projects/thumbnails/filson-17.png",
    ],
    videos: [
      {
        id: "filson-maritime",
        title: "Filson Life Films - NW Maritime",
        bunnyVideoId: "95e90ff4-e5c2-4408-9a2c-d366097e9087",
        bunnyLibraryId: "468791",
        duration: "2:49",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Producer", name: "Filson Creative Team" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Agency", name: "In-House" },
          6: { title: "Year", name: "2024" },
        },
      },
      {
        id: "filson-dryden",
        title: "Filson - Dryden Backpack",
        bunnyVideoId: "fcb4febc-2ad6-4687-afa1-b35f31b44c5b",
        bunnyLibraryId: "468791",
        duration: "0:11",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Editor", name: "Marco Gutierrez" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Year", name: "2024" },
        },
      },
      {
        id: "filson-dryden-spin",
        title: "Filson - Dryden Backpack Solo Spin",
        bunnyVideoId: "3d90044f-e943-45f4-903d-eec3ae459498",
        bunnyLibraryId: "468791",
        duration: "0:10",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Editor", name: "Marco Gutierrez" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Year", name: "2024" },
        },
      },
      {
        id: "filson-mens-spring",
        title: "Filson - Men's Spring Collection",
        bunnyVideoId: "cdeb305f-6e88-400f-a50a-bbe13222e650",
        bunnyLibraryId: "468791",
        duration: "0:30",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Producer", name: "Filson Creative Team" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Year", name: "2024" },
        },
      },
      {
        id: "filson-rangeland-shirts",
        title: "Filson - Rangeland Shirts",
        bunnyVideoId: "90f98df1-4b67-4348-9854-b5db0f1c3654",
        bunnyLibraryId: "468791",
        duration: "0:20",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Producer", name: "Filson Creative Team" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Year", name: "2024" },
        },
      },
      {
        id: "filson-ranger-anorak",
        title: "Filson - Ranger LT Anorak",
        bunnyVideoId: "e7a1cd4a-48bb-4648-a6a4-93fa522f2061",
        bunnyLibraryId: "468791",
        duration: "0:18",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Producer", name: "Filson Creative Team" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Year", name: "2024" },
        },
      },
      {
        id: "filson-womens-spring",
        title: "Filson - Women's Spring Collection",
        bunnyVideoId: "b450ecb1-a52f-473a-bcc6-31dd814cedd3",
        bunnyLibraryId: "468791",
        duration: "0:28",
        credits: {
          1: { title: "Director", name: "Marco Gutierrez" },
          2: { title: "Director of Photography", name: "Marco Gutierrez" },
          3: { title: "Producer", name: "Filson Creative Team" },
          4: { title: "Client", name: "Filson" },
          5: { title: "Year", name: "2024" },
        },
      },
    ],
    featured: true,
  },
  {
    id: "kraken-filson",
    title: "Kraken x Filson",
    slug: "kraken-filson",
    client: "Kraken x Filson",
    thumbnails: [
      "/images/projects/thumbnails/kraken-1.png",
      "/images/projects/thumbnails/kraken-2.png",
      "/images/projects/thumbnails/kraken-3.png",
      "/images/projects/thumbnails/kraken-4.png",
    ],
    videos: [
      {
        id: "kraken-collab",
        title: "Kraken x Filson Collaboration",
        bunnyVideoId: "13193c32-8852-46c4-be07-2fa7c9606ed1",
        bunnyLibraryId: "468791",
        duration: "0:28",
        credits: {
          1: {
            title: "Director",
            name: "Marco Gutierrez",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Producer",
            name: "Kraken Rum",
          },
          4: {
            title: "Client",
            name: "Kraken x Filson",
          },
          5: {
            title: "Year",
            name: "2024",
          },
        },
      },
    ],
    featured: true,
  },
  {
    id: "realtree-filson",
    title: "Realtree x Filson",
    slug: "realtree-filson",
    client: "Realtree x Filson",
    thumbnails: [
      "/images/projects/thumbnails/realtree-1.png",
      "/images/projects/thumbnails/realtree-2.png",
      "/images/projects/thumbnails/realtree-3.png",
      "/images/projects/thumbnails/realtree-4.png",
    ],
    videos: [
      {
        id: "realtree-collab",
        title: "Realtree x Filson Partnership",
        bunnyVideoId: "32e872d1-4d1d-4bd1-a1c4-5b739315f9d5",
        bunnyLibraryId: "468791",
        duration: "0:44",
        credits: {
          1: {
            title: "Director",
            name: "Marco Gutierrez",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Producer",
            name: "Filson Creative",
          },
          4: {
            title: "Client",
            name: "Realtree x Filson",
          },
          5: {
            title: "Year",
            name: "2024",
          },
        },
      },
    ],
    featured: true,
  },
  {
    id: "ten-thousand-filson",
    title: "Ten Thousand x Filson",
    slug: "ten-thousand-filson",
    client: "Ten Thousand x Filson",
    thumbnails: [
      "/images/projects/thumbnails/thousand-men-1.png",
      "/images/projects/thumbnails/thousand-men-2.png",
      "/images/projects/thumbnails/thousand-men-3.png",
      "/images/projects/thumbnails/thousand-men-4.png",
    ],
    videos: [
      {
        id: "ten-thousand",
        title: "Ten Thousand x Filson",
        bunnyVideoId: "9c0bdefe-06e9-4920-b50a-ef9f44d358df",
        bunnyLibraryId: "468791",
        duration: "0:31",
        credits: {
          1: {
            title: "Director",
            name: "Marco Gutierrez",
          },
          2: {
            title: "Director of Photography",
            name: "Marco Gutierrez",
          },
          3: {
            title: "Producer",
            name: "Ten Thousand",
          },
          4: {
            title: "Client",
            name: "Ten Thousand x Filson",
          },
          5: {
            title: "Agency",
            name: "Ten Thousand Creative",
          },
          6: {
            title: "Year",
            name: "2024",
          },
        },
      },
    ],
    featured: true,
  },
];

// Helper functions
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
