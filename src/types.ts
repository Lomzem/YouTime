// src/types.ts

export interface TimestampNote {
  time: string;
  note: string;
}

export interface YouTubeVideo {
  url: string;
  title: string;
  timestamps: TimestampNote[];
}
