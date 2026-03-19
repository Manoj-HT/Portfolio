# Professional Portfolio for Manoj HT

This Prompt document describes the complete project requirement for building a professional portfolio website for Manoj HT in Angular. This document is intended to be used by AI agents to generate the complete website code.

## About Manoj HT

Manoj HT is a front end engineer with 3+ years of experience in building web applications. He is passionate about building modern, responsive, and user-friendly web applications. He is also a quick learner and is always open to learning new technologies and frameworks.

### Key Skills

1. React.js
2. Angular
3. Node.js
4. Express.js
5. MongoDB
6. TypeScript

### Projects

1. [Onnet Systems India] IPTV SMS, MUX & Scrambler, DRM
2. [Onnet Systems India] IAF CMS & SMS
3. [Onnet Systems India] DHC CMS
4. [Onnet Systems India] Metadata tracker
5. [Ascendion Technologies] FRM
6. [Neighborly India GCC] Opus 2.0
7. [Neighborly India GCC] Customer Portal
8. [Neighborly India GCC] MS AADB2C Integration

### Certifications

1. Full Stack developer - 6 months - JSpiders 2022

### Education

1. Data science and Artificial Intelligence - Present - PES University, Bangalore
2. Mechanical Engineering - 2021 - GM Institute of Technology, Davangere

### Work Experience

1. Hydrolines India Pvt Ltd - 2020 - 2021
2. Onnet Systems India Pvt Ltd - 2022 - 2024
3. Ascendion Technologies - 2024 - 2025
4. Neighborly India GCC - 2025 - present

### Contact Information

1. [EMAIL_ADDRESS] manulogan101@gmail.com
2. [PHONE_NUMBER] +91-8277429750
3. [LINKED_IN] https://www.linkedin.com/in/manoj-ht/
4. [REDDIT] https://www.reddit.com/user/manoj-ht/


## Website Requirements

The website should be built using Angular and should be responsive and user-friendly. It should have the following pages:

### 1. Home

- This page contains a brief description about Manoj HT and the Picture of Manoj HT
- Picture is stored in the root of the project

### 2. Projects & Skills

- This page contains a list of all the projects Manoj HT has worked on and the skills he has.
- The projects and skills should be arranged in grid in two seperate sections on either sideof the page for desktop view an one below other in mobile view
- Each grid item should be clickable
- Clicking on Projects grid item should open a in screen dialog box to display the project details
- In screen dialog box should have the following fields:
    - Project Name
    - Project Description
    - Project Technologies
    - Time Period
    - Company worked in
- Clicking on Skills grid item should open a in screen dialog box to display the skill details
- In screen dialog box should have the following fields:
    - Skill Name
    - Skill Description
    - Skill Category
    - Skill Proficiency

### 3. Contact

- This page contains the contact information of Manoj HT along with a resume download button
- The contact details should be arranged in a grid with three columns on desktop and one column on mobile

### 4. Work Experience & Education

- This page contains the work experience and education of Manoj HT
- The work experience and education should be arranged in a timeline format in two columns on desktop and one column on mobile
- Each work experience should have the following fields:
    - Company Name
    - Time Period
    - Role
    - Responsibilities
    - Technologies Used
    - Achievements
- Each education should have the following fields:
    - Degree
    - University
    - Time Period
    - Achievements

### 5. Youtube

- This page contains a list of all the youtube videos, Manoj HT has uploaded
- The youtube videos should be arranged in a grid with three columns on desktop and one column on mobile
- Each youtube video should have the following fields:
    - Video Title
    - Video Description
    - Video Thumbnail
    - Video URL (embed)
- Categorize videos based on the following categories:
    - Hello Kannada
    - Playground designs
- Add configurations to easily add video links and categories
- Provide a button to View and Subscribe to my channel

## Website Design

- The website should have a modern and professional design
- It should be responsive and user-friendly
- It should have a dark mode and light mode
- It should not have any page scrolls
- It should have container scrolls
- Keep navigation bar a pill floating on screen of max-content width
- Keep navigation bar on top left of the screen for desktop view
- For Apple devices keep the navigation bar on top right of the screen
- Keep navigation bar on bottom center of the screen for tablet and mobile view
- navigation bar should not touch the edges of the screen
- In screen dialog boxes should not open in center of the screen
- Center parting for work experience and education timeline should be seperated by a line in the center
- Implement delayed routing of about 500ms and implement page transition animations for all pages
- Implement beautiful micro animations for all interactive elements
- Implement transitions for all layout shifting elements

## Technical Requirements

1. The project should use latest Angular version
2. The project should be built using Angular CLI with ssr enabled
3. angular.json should be configured to remove the "app-" prefix for custom components
4. All components should be named appropriately with two word structure so that elements can be identified easily
5. All components should be lazy loaded
6. Names for Services, Variables and Components should be descriptive
7. Assume placeholder for the details not provided in the prompt and add TODO comment for the placeholder line to be updated by me manually

## Update 2

1. Use icons instead of text for Navigation bar in mobile view as this is going beyond screen
2. Update the route delay to 300ms
3. add an animation of opacity reducing to 0 over the entire page (Not navigation bar) when a new route is clicked
4. Add an animation of opacity increasing from 0 to 1 over the entire page (Not navigation bar) when the new route is loaded
5. In projects section the dialog box always opens at the right bottom of the screen, change it to open at the center of the screen
6. I have noticed the usage of deprecated values in dialog box for animations please update and use the latest apis
7. I have noticed that the bg color for white is #fff, Please change this some light gray color or very light peach
8. The bottom sheey design for mobile view is good but bounces in mobile view. Please remove th bouncing animation. rest everything is fine with it
9. I noticed the beautiful gradient background on headings, is it possible to animate this, just moving the gradient infinitely
10. The card on the home page move
11. Can you reverse the arrangement of projects with latest first according to the time period
12. On Home page the card moves slightly up on hover can this be changed to have a box-shadow so that it has the levitated effect
13. Implement QuickSand font through out the app. except for the gradient headings.