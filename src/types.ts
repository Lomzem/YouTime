// src/types.ts

export interface Timestamp {
  url: string;
  time: string;
  value: string;
}

export interface YouTubeVideo {
  url: string;
  title: string;
  timestamps: Timestamp[];
}
