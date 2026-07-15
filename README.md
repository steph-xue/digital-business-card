# Digital Business Card

A personal digital business card, showcasing my profile, background, and interests, with direct links to professional contact points including my email, GitHub, and LinkedIn.

**[View Live Demo](https://digital-business-card-steph.netlify.app/)**

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

<br>

## Overview

This project is a personal digital business card, built to practice component composition in React. It is built with React, JavaScript, HTML, CSS, and Bootstrap, and bundled with Vite. The business card is assembled from four components, a profile section, an about section, an interests section, and a footer of social links, each rendered independently and composed together into a single layout.

<br>

## Features

### Business Card
The business card displays my profile photo, name, and profession at the top, along with buttons for professional contact, including email and LinkedIn, as well as a direct link to my GitHub profile. Below that, an about section gives a short written bio, and an interests section lists my professional interests. A footer at the bottom includes icon buttons linking out to my other social media profiles, including Twitter, Facebook, Instagram, and GitHub.

<p align="center"><img src="./images/business-card.png?raw=true" alt="Digital Business Card" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS, Bootstrap |
| Build Tool | Vite |

<br>

## How It Works

The business card is composed from four independent components, a profile section, an about section, an interests section, and a footer, all rendered together from a single root component. Each component is self contained and only responsible for its own section of content, so the layout can be rearranged or a section replaced without affecting the others. Bootstrap provides the styling for the email and LinkedIn buttons in the profile section. Vite handles the local development server and production build, compiling the React components into files that can be deployed anywhere.

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/digital-business-card.git
cd digital-business-card
```

**2. Install the dependencies**

This installs React and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- A downloadable PDF or vCard version of the business card
- A contact form instead of a plain email link
- A dark mode toggle for the business card
