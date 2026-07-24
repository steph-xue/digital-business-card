<h1 align="center">
  Digital Business Card
</h1>

<h4 align="center">
  A web application that functions as a personal digital business card, <br>
  presenting my background, interests, and professional contact points.
</h4>

<p align="center">
  <img src="docs/screenshots/business-card.png?raw=true" alt="Digital Business Card" width="450">
</p>

<p align="center">
  <a href="https://digital-business-card-steph.netlify.app/">View Live Demo</a>
</p>

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)

<br>

## Overview

This project presents a personal digital business card that brings together my background, professional interests, and contact information in a single organized interface. Built with React, JavaScript, HTML, and CSS using Vite, the application is divided into reusable components for the profile, about, interests, and footer sections. It displays my photo, name, profession, biography, professional interests, and direct links to my email and social media profiles, keeping the information clear and easily accessible.

<br>

## Features

### Business Card
The business card displays my profile photo, name, and profession at the top, along with buttons for professional contact, including email and LinkedIn, as well as a direct link to my GitHub profile. Below that, an about section gives a short written bio, and an interests section lists my professional interests. A footer at the bottom includes icon buttons linking out to my other social media profiles, including Twitter, Facebook, Instagram, and GitHub.

<p align="center"><img src="https://raw.githubusercontent.com/steph-xue/digital-business-card/dcab146/images/business-card.png" alt="Digital Business Card" width="700"></p>

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

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- A downloadable PDF or vCard version of the business card
- A contact form instead of a plain email link
- A dark mode toggle for the business card
  
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
