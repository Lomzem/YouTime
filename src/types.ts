// src/types.ts

interface Timestamp {
  time: string;
  value: string;
}

interface YouTubeVideo {
  url: string;
  title: string;
  timestamps: Timestamp[];
}

export { YouTubeVideo };
