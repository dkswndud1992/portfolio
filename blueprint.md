# 안주영's Developer Portfolio

## Overview

This portfolio showcases the skills, experience, and projects of 안주영, a 6-year full-stack developer with a diverse background in web development, robotics, and data analysis. The portfolio is based on his detailed resume, highlighting his journey from a design student to a versatile developer proficient in Java, Spring, OpenLayers, ROS, and various other technologies.

## Style and Design

*   **Theme:** Modern, clean, and professional. The design aims to be visually appealing and user-friendly.
*   **Color Palette:** A balanced and professional color scheme is used throughout the application.
*   **Typography:** Clear and readable fonts are used to ensure a good reading experience.
*   **Layout:** A responsive single-page layout that works well on all devices. The navigation is intuitive, guiding users through the different sections of the portfolio.
*   **Imagery:** High-quality, relevant images from Unsplash are used for each project to provide visual context and enhance the overall aesthetic.

## Implemented Features

*   **Hero Section:** A compelling introduction with the developer's name, title, and a summary of his professional experience and philosophy.
*   **About Me Section:** Details the developer's background, responsible and proactive personality, and his journey from design to development, emphasizing his belief in creating value through coding.
*   **Skills Section:** A dedicated section that categorizes the developer's technical skills into Backend, Frontend, and Others & Robotics, providing a clear overview of his capabilities.
*   **Projects Section:** A grid-based showcase of key projects from his career, including:
    *   Robotics Control System (휴림네트웍스㈜)
    *   Flood Risk Map (㈜헥코리아)
    *   Payvil Payment App (에몰라이즈㈜)
    *   isso Memo App (Personal Project)
    *   Each project card includes the company, a description, key technologies, and links to live sites or app stores where applicable.
*   **Contact Section:** Includes a contact form for easy communication and direct contact information (email, phone). It also features prominent links to his GitHub and a secondary portfolio.
*   **Footer Section:** Contains copyright information and quick links to his professional profiles and repositories.

## Development History

### Phase 3: Skills Section Integration (Current)

*   **Objective:** Add a new section to showcase the developer's technical skills.
*   **Actions Taken:**
    *   Created a new standalone `SkillsComponent`.
    *   Added the component to the main application layout (`app.html`) between the `About` and `Projects` sections.
    *   Populated the section with skills from the resume, categorized into Backend, Frontend, and Others & Robotics.
    *   Styled the component for a clean, readable, and visually appealing presentation.

### Phase 2: Resume-Based Update

*   **Objective:** Modify the existing portfolio to accurately reflect the resume of 안주영.
*   **Actions Taken:**
    *   **Hero Section:** Updated the title, subtitle, and description to match the resume's summary.
    *   **About Section:** Re-wrote the content based on the "About Me" and "Personal Statement" sections of the resume.
    *   **Projects Section:** Replaced placeholder projects with actual projects from the resume. Added descriptions, company names, technologies, and links for each project. Updated images to be relevant to the project categories (Robotics, GIS, Payment, etc.).
    *   **Contact Section:** Updated contact information (email, phone) and added links to GitHub and other portfolios mentioned in the resume.
    *   **Footer Section:** Added links to relevant professional repositories and portfolios.

### Phase 1: Foundational Setup

*   **Objective:** Create the initial structure for a developer portfolio.
*   **Actions Taken:**
    *   Created a `blueprint.md` file to outline the project's goals, structure, and features.
    *   Generated standalone components for `Hero`, `About`, `Projects`, `Contact`, and `Footer`.
    *   Set up basic routing and a clean, modern layout.
    *   Ensured all components utilized `OnPush` change detection and followed modern Angular best practices.
