export interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetadata[];
}

export interface Article {
  id: number;
  url: string;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  byline: string;
  title: string;
  abstract: string;
  adx_keywords: string;
  media: Media[];
}
