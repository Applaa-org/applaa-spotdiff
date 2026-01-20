export interface Level {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  originalImage: string;
  modifiedImage: string;
  differences: Difference[];
  timeLimit?: number;
}

export interface Difference {
  id: number;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  radius: number; // percentage (0-100)
  found: boolean;
}

export const levels: Level[] = [
  {
    id: 1,
    title: "Beach Scene",
    difficulty: "Easy",
    originalImage: "https://picsum.photos/600/400?random=101",
    modifiedImage: "https://picsum.photos/600/400?random=102",
    differences: [
      { id: 1, x: 15, y: 25, radius: 5, found: false },
      { id: 2, x: 45, y: 60, radius: 5, found: false },
      { id: 3, x: 75, y: 35, radius: 5, found: false },
      { id: 4, x: 30, y: 80, radius: 5, found: false },
      { id: 5, x: 85, y: 70, radius: 5, found: false }
    ],
    timeLimit: 120
  },
  {
    id: 2,
    title: "City Street",
    difficulty: "Medium",
    originalImage: "https://picsum.photos/600/400?random=201",
    modifiedImage: "https://picsum.photos/600/400?random=202",
    differences: [
      { id: 1, x: 20, y: 30, radius: 4, found: false },
      { id: 2, x: 50, y: 45, radius: 4, found: false },
      { id: 3, x: 35, y: 70, radius: 4, found: false },
      { id: 4, x: 70, y: 25, radius: 4, found: false },
      { id: 5, x: 80, y: 85, radius: 4, found: false },
      { id: 6, x: 10, y: 60, radius: 4, found: false },
      { id: 7, x: 60, y: 15, radius: 4, found: false }
    ],
    timeLimit: 90
  },
  {
    id: 3,
    title: "Mountain View",
    difficulty: "Hard",
    originalImage: "https://picsum.photos/600/400?random=301",
    modifiedImage: "https://picsum.photos/600/400?random=302",
    differences: [
      { id: 1, x: 12, y: 22, radius: 3, found: false },
      { id: 2, x: 28, y: 38, radius: 3, found: false },
      { id: 3, x: 42, y: 15, radius: 3, found: false },
      { id: 4, x: 58, y: 52, radius: 3, found: false },
      { id: 5, x: 73, y: 28, radius: 3, found: false },
      { id: 6, x: 88, y: 65, radius: 3, found: false },
      { id: 7, x: 35, y: 78, radius: 3, found: false },
      { id: 8, x: 65, y: 85, radius: 3, found: false },
      { id: 9, x: 22, y: 55, radius: 3, found: false },
      { id: 10, x: 78, y: 42, radius: 3, found: false }
    ],
    timeLimit: 60
  },
  {
    id: 4,
    title: "Forest Path",
    difficulty: "Medium",
    originalImage: "https://picsum.photos/600/400?random=401",
    modifiedImage: "https://picsum.photos/600/400?random=402",
    differences: [
      { id: 1, x: 25, y: 35, radius: 4, found: false },
      { id: 2, x: 55, y: 50, radius: 4, found: false },
      { id: 3, x: 40, y: 75, radius: 4, found: false },
      { id: 4, x: 75, y: 30, radius: 4, found: false },
      { id: 5, x: 15, y: 65, radius: 4, found: false },
      { id: 6, x: 85, y: 80, radius: 4, found: false }
    ],
    timeLimit: 90
  },
  {
    id: 5,
    title: "Ocean Sunset",
    difficulty: "Easy",
    originalImage: "https://picsum.photos/600/400?random=501",
    modifiedImage: "https://picsum.photos/600/400?random=502",
    differences: [
      { id: 1, x: 30, y: 40, radius: 5, found: false },
      { id: 2, x: 60, y: 55, radius: 5, found: false },
      { id: 3, x: 45, y: 70, radius: 5, found: false },
      { id: 4, x: 20, y: 25, radius: 5, found: false },
      { id: 5, x: 80, y: 60, radius: 5, found: false }
    ],
    timeLimit: 120
  },
  {
    id: 6,
    title: "Desert Landscape",
    difficulty: "Hard",
    originalImage: "https://picsum.photos/600/400?random=601",
    modifiedImage: "https://picsum.photos/600/400?random=602",
    differences: [
      { id: 1, x: 18, y: 28, radius: 3, found: false },
      { id: 2, x: 38, y: 42, radius: 3, found: false },
      { id: 3, x: 52, y: 18, radius: 3, found: false },
      { id: 4, x: 68, y: 55, radius: 3, found: false },
      { id: 5, x: 82, y: 32, radius: 3, found: false },
      { id: 6, x: 25, y: 75, radius: 3, found: false },
      { id: 7, x: 45, y: 88, radius: 3, found: false },
      { id: 8, x: 72, y: 78, radius: 3, found: false },
      { id: 9, x: 15, y: 52, radius: 3, found: false },
      { id: 10, x: 88, y: 68, radius: 3, found: false }
    ],
    timeLimit: 60
  }
];