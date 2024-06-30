# NY Times Most Popular Articles App

## Overview

This project implements a simple web application using React to interact with the NY Times Most Popular Articles API. It features a master/detail web app structure where users can view a list of articles and click to see detailed information about each article.

## API Key

To access the NY Times API, you'll need to sign up for an API key at [NY Times Developer Portal](https://developer.nytimes.com/get-started). Once obtained, replace `sample-key` in the following API endpoints with your API key:

- Latest articles: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=sample-key`
- Articles from the past 7 days: `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=sample-key`

## Features

- **Eye-catching Design:** Incorporates visually appealing and user-friendly design elements to enhance the overall user experience.
- **Responsive Design:** Ensures a responsive user interface that adapts smoothly to different screen sizes and devices.
- **Routing:** Implements routing with React Router or similar library, allowing seamless navigation between the List Page and Details Page.
- **Dropdown Selector:** Includes a dropdown on the List Page allowing users to select articles from periods of 1, 7, or 30 days.
- **Navigation:** Clicking on an article in the List Page navigates to a Details Page showing comprehensive information about the article.
- **Testing:** Includes unit tests using Jest and React Testing Library, as well as UI tests with Cypress for comprehensive coverage.
- **Code Quality:** Emphasizes clean, reusable JavaScript code adhering to modern best practices.
- **Tooling:** Provides npm or yarn scripts for building, linting, running tests, and generating coverage reports.

## Tech Stack

- **Framework:** React with TypeScript
- **State Management:** Redux Toolkit
- **Data Fetching:** RTK Query
- **Styling:** Styled Components
- **Testing:** Jest (unit tests), Cypress (UI tests)
- **Build Tool:** Vite (for development)

## Getting Started

Follow these instructions to clone, install dependencies, configure the project, and run it locally for development and testing.

### Prerequisites

- Node.js and npm/yarn installed on your machine
- NY Times API key obtained from [NY Times Developer Portal](https://developer.nytimes.com/get-started)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Dina-Ashmawy/React-NYTimesPopularArticles.git
   cd React-NYTimesPopularArticles
   ```
2. **Install dependencies:**
   npm install
3. **Run the app:**
   npm run dev

## Screenshots

I have included screenshots of the application to help you understand its functionality and appearance. You can find these screenshots in the following directory:

[app/evidence](./screenshots)
