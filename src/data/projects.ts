export interface Video {
  id: string;
  title: string;
  bunnyVideoId: string; // Bunny.net video ID
  bunnyLibraryId: string; // Your Bunny.net library ID
  thumbnail?: string; // Optional custom thumbnail (will use auto-generated if not provided)
  duration?: string; // e.g., "2:30"
  description?: string;
  credits: {
    dp?: string; // Director of Photography
    exec?: string; // Executive Producer
    talent?: string[];
    client?: string;
    agency?: string;
    year?: string;
    director?: string;
    producer?: string;
    editor?: string;
    colorist?: string;
    [key: string]: any; // Allow for custom credit fields
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

// Your project data - updated with individual video credits
export const projects: Project[] = [
  {
    id: "adrian-milanio",
    title: "Adrian Milanio",
    slug: "adrian-milanio",
    client: "Adrian Milanio",
    thumbnails: [
      "/images/projects/thumbnails/adrian-1.png",
      "/images/projects/thumbnails/adrian-2.png",
    ],
    videos: [
      {
        id: "adrian-alone",
        title: "Adrian Milanio - All Alone",
        bunnyVideoId: "efd61be6-5b9b-4108-af09-591be75f8371",
        bunnyLibraryId: "468791",
        duration: "2:06",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          talent: ["Adrian Milanio"],
          client: "Adrian Milanio",
          year: "2024",
        },
      },
      {
        id: "adrian-over",
        title: "Adrian Milanio - Over and Over",
        bunnyVideoId: "97720321-a326-4f3c-8e21-35ad59d94063",
        bunnyLibraryId: "468791",
        duration: "1:57",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          talent: ["Adrian Milanio"],
          client: "Adrian Milanio",
          year: "2024",
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
    ],
    videos: [
      {
        id: "brudi-cowboy",
        title: "Brudi Brothers - Me More Cowboy",
        bunnyVideoId: "f6faeee1-5c24-40b1-9d37-07f5450246df",
        bunnyLibraryId: "468791",
        duration: "2:48",
        credits: {
          dp: "Marco Gutierrez",
          director: "Brudi Brothers",
          producer: "Marco Gutierrez",
          talent: ["Brudi Brothers"],
          client: "Brudi Brothers",
          year: "2024",
        },
      },
      {
        id: "brudi-seal",
        title: "Brudi Brothers - Super Seal",
        bunnyVideoId: "22171579-7fb1-49ef-9c86-0ee6ef3ef3a3",
        bunnyLibraryId: "468791",
        duration: "3:23",
        credits: {
          dp: "Marco Gutierrez",
          director: "Brudi Brothers",
          producer: "Marco Gutierrez",
          talent: ["Brudi Brothers"],
          client: "Brudi Brothers",
          year: "2024",
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
    ],
    videos: [
      {
        id: "filson-maritime",
        title: "Filson Life Films - NW Maritime",
        bunnyVideoId: "95e90ff4-e5c2-4408-9a2c-d366097e9087",
        bunnyLibraryId: "468791",
        duration: "2:49",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          producer: "Filson Creative Team",
          client: "Filson",
          agency: "In-House",
          year: "2024",
        },
      },
      {
        id: "filson-dryden",
        title: "Filson - Dryden Backpack",
        bunnyVideoId: "fcb4febc-2ad6-4687-afa1-b35f31b44c5b",
        bunnyLibraryId: "468791",
        duration: "0:11",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          editor: "Marco Gutierrez",
          client: "Filson",
          year: "2024",
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
    ],
    videos: [
      {
        id: "kraken-collab",
        title: "Kraken x Filson Collaboration",
        bunnyVideoId: "13193c32-8852-46c4-be07-2fa7c9606ed1",
        bunnyLibraryId: "468791",
        duration: "0:28",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          producer: "Kraken Rum",
          client: "Kraken x Filson",
          year: "2024",
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
    thumbnails: ["/images/projects/thumbnails/realtree-1.png"],
    videos: [
      {
        id: "realtree-collab",
        title: "Realtree x Filson Partnership",
        bunnyVideoId: "32e872d1-4d1d-4bd1-a1c4-5b739315f9d5",
        bunnyLibraryId: "468791",
        duration: "0:44",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          producer: "Filson Creative",
          client: "Realtree x Filson",
          year: "2024",
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
      "/images/projects/thumbnails/ten-thousand-1.png",
      "/images/projects/thumbnails/ten-thousand-2.png",
      "/images/projects/thumbnails/ten-thousand-3.png",
      "/images/projects/thumbnails/ten-thousand-4.png",
    ],
    videos: [
      {
        id: "ten-thousand",
        title: "Ten Thousand x Filson",
        bunnyVideoId: "9c0bdefe-06e9-4920-b50a-ef9f44d358df",
        bunnyLibraryId: "468791",
        duration: "0:31",
        credits: {
          dp: "Marco Gutierrez",
          director: "Marco Gutierrez",
          producer: "Ten Thousand",
          client: "Ten Thousand x Filson",
          agency: "Ten Thousand Creative",
          year: "2024",
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
