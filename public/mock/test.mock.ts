import { Article } from "./../../src/interfaces";

export const mockArticles: Article[] = [
  {
    id: 1,
    url: "http://example.com/article1",
    source: "NY Times",
    published_date: "2024-06-30",
    updated: "2024-06-30T12:00:00Z",
    section: "Technology",
    subsection: "",
    byline: "By John Doe",
    title: "Test Article 1",
    abstract: "This is the abstract for test article 1.",
    adx_keywords: "technology, test",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption: "An image for test article 1.",
        copyright: "NY Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "http://example.com/image1_thumb.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "http://example.com/image1_large.jpg",
            format: "Large",
            height: 800,
            width: 600,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    url: "http://example.com/article2",
    source: "NY Times",
    published_date: "2024-06-29",
    updated: "2024-06-29T10:00:00Z",
    section: "Health",
    subsection: "",
    byline: "By Jane Smith",
    title: "Test Article 2",
    abstract: "This is the abstract for test article 2.",
    adx_keywords: "health, test",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption: "An image for test article 2.",
        copyright: "NY Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "http://example.com/image2_thumb.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "http://example.com/image2_large.jpg",
            format: "Large",
            height: 800,
            width: 600,
          },
        ],
      },
    ],
  },
];

export const mockSingleArticle: Article = {
  id: 1,
  url: "http://example.com/article1",
  source: "NY Times",
  published_date: "2024-06-30",
  updated: "2024-06-30T12:00:00Z",
  section: "Technology",
  subsection: "",
  byline: "By John Doe",
  title: "Test Article 1",
  abstract: "This is the abstract for test article 1.",
  adx_keywords: "technology, test",
  media: [
    {
      type: "image",
      subtype: "photo",
      caption: "An image for test article 1.",
      copyright: "NY Times",
      approved_for_syndication: 1,
      "media-metadata": [
        {
          url: "http://example.com/image1_thumb.jpg",
          format: "Standard Thumbnail",
          height: 75,
          width: 75,
        },
        {
          url: "http://example.com/image1_medium.jpg",
          format: "mediumThreeByTwo210",
          height: 140,
          width: 210,
        },
        {
          url: "http://example.com/image1_large.jpg",
          format: "Large",
          height: 800,
          width: 600,
        },
      ],
    },
  ],
};
