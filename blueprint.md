# 안주영's Developer Portfolio

## Overview

This portfolio showcases the skills, experience, and projects of 안주영, a 6-year full-stack developer with a diverse background in web development, robotics, and data analysis. The portfolio is based on his detailed resume, highlighting his journey from a design student to a versatile developer proficient in Java, Spring, OpenLayers, ROS, and various other technologies.

## Style and Design

*   **Theme:** Modern, clean, and professional. The design aims to be visually appealing and user-friendly.
*   **Color Palette:** A balanced and professional color scheme is used throughout the application.
*   **Typography:** Clear and readable fonts are used to ensure a good reading experience.
*   **Layout:** A responsive single-page layout that works well on all devices. The navigation is intuitive, guiding users through the different sections of the portfolio.
*   **Imagery:** High-quality, relevant images from official project sites and repositories are used for each project to provide visual context and enhance the overall aesthetic.

## Implemented Features

*   **Hero Section:** A compelling introduction with the developer's name, title, and a summary of his professional experience and philosophy.
*   **About Me Section:** Details the developer's background, responsible and proactive personality, and his journey from design to development, emphasizing his belief in creating value through coding.
*   **Skills Section:** A dedicated section that categorizes the developer's technical skills into Backend, Frontend, and Others & Robotics, providing a clear overview of his capabilities.
*   **Projects Section:** A grid-based showcase of key projects from his career, including:
    *   Robotics Control System (휴림네트웍스㈜)
    *   Flood Risk Map (㈜헥코리아)
    *   isso Memo App (Personal Project)
    *   Each project card includes the company, a description, key technologies displayed as styled tags, and links to live sites or app stores where applicable.
*   **Contact Section:** Includes a contact form for easy communication.
*   **Footer Section:** Contains copyright information and a link to the developer's GitHub profile.

## Development History

### Phase 8: Tech Stack Tag Styling (Current)

*   **Objective:** Improve the visual representation of the technology stacks for each project.
*   **Actions Taken:**
    *   Updated `projects.css` to add styling for `.project-tech` and a new `.project-techs` container, creating a tag-like appearance with background color, padding, and rounded corners.
    *   Modified `projects.html` to wrap the technology `<span>` tags within a `<div class="project-techs">` to apply the new flexbox layout.

### Phase 7: Project Image Update

*   **Objective:** Replace placeholder project images with official and relevant images.
*   **Actions Taken:**
    *   Updated the image for "로봇 관제 시스템" to the official TETRA robot image.
    *   Updated the image for "홍수위험지도" to a screenshot from the official government site.
    *   Updated the image for "isso 메모 앱" to the official app splash screen.

### Phase 6: Contact Section Cleanup

*   **Objective:** Simplify the contact section by removing the contact information panel.
*   **Actions Taken:**
    *   Removed the entire 'contact-info' div from `contact.html`.
    *   Adjusted the layout to allow the contact form to fill the full width of the section.

### Phase 5: Footer Cleanup

*   **Objective:** Update the footer to change the copyright year and remove unnecessary links.
*   **Actions Taken:**
    *   Updated the copyright year to 2025 in `footer.html`.
    *   Removed the "Secret Portfolio" and "Hyulim-Networks" links from the footer.

### Phase 4: Project and Contact Cleanup

*   **Objective:** Remove the 'Payvil' project from the portfolio and delete the phone number from the contact information.
*   **Actions Taken:**
    *   Removed the 'Payvil' project card from `projects.html`.
    *   Removed the phone number from `contact.html`.

### Phase 3: Skills Section Integration

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
