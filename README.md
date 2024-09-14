# Term 3 Assignment 1 - Workbook

## 1. 	Provide an overview and description of a standard source control process for a large project

GitHub is a tried and tested tool for source control and has several features which assist with managing large projects. Some of the key features to ensure robust source control management include:

- **Version control integration** -  GitHub can track all changes made to a repository including some comments, dates and a comparison between the repository before and after the commit was made. 
- **Branch protection** - Ability to create separate branches to where the main functionailty of a software is kept. This allows developers to work on updates on a separate branch without impacting the operation of the main features. 
- **Pull requests** - With pull requests, GitHub makes collaborative coding easier. Developers can request modifications by submitting a pull request (PR), which team members can evaluate, comment on, and accept. Before merging into the main branch, this procedure guarantees code quality, peer review, and conformance to coding standards.
- **Security access and controls** - Granular access control is provided by GitHub, which enables administrators to specify permissions at the repository level for various roles (such as write, read, and admin) to guarantee that only authorised individuals can merge or modify important codebase sections.

There are also several other features offered by GitHub to ensure proper source control for projects, however the above are just some of the main key features developers would look for. How GitHub would be used in practise for a large scale project would be as follows:

1. A repository would be created at the beginning of a new project to act as the main database for where the live version of a project and it's features would be held. This can be considered the 'main' branch for a project in development and the live version of the software would sit here.  
2. Several branches will be created whenever a developer is creating a new feature to be deployed to the main software at a future date. This allows for development and testing to take place with full functionality of the software without affecting the live version. 
3. As development takes place, several commits will be made to ensure that the feature is constantly being updated and Github will track the various version and commits for history and security. This will allow fordevelopers to rollback changes if siginificant issues arise and also keep track of what has been chaged and by who. 
4. Once the feature has been developed and is ready to be merged back into the main branch of the repository, developers can issue a pull request which allows a senior developer to review the work prior to this being merged into the main branch. This is an addtional layer of security to ensure that any work that can affect the main branch is vetted and approved prior to committing. 
5. Once a pull request has been approved, the feature will be merged into the main branch wth GitHub recording the changes and all comments to ensure all history is available.

## 2. What are the most important aspects of quality software?

To achieve dependability, maintainability, and user happiness, high-quality software is necessary. The most important aspects of quality software typically revolve around functional and non-functional qualities.

- **Functionality** - The software needs to function as intended and fulfil the required specifications. It ought to effectively resolve the issue for which it was intended. Every feature and function that the user need and that is outlined in the design should be included in the software. The software's capacity to easily communicate with other softwaremes or systems, including third-party tools or APIs. No matter how technical the users are, the software should be simple to use, intuitive, and straightforward to utilise.
- **Reliability** - Under both expected and unexpected circumstances, the software should operate consistently without crashing or producing errors. When mistakes do happen, the software need to manage them tactfully, displaying informative alerts without compromising functionality or overall performance. It ought to be built to continue functioning even in the event of a partial system failure, reducing downtime or data loss.
- **Performance** - The software should prevent pointless calculations or sluggish operations and make the best use of available resources (memory, CPU, bandwidth, etc.). The software ought to have the capacity to manage an increase in demand (such as an increase in users, data, or transactions) without experiencing any decline in performance. User inputs should be processed by the software rapidly, and it should finish tasks without needless delays.
- **Maintainability** - It will be simpler for developers to maintain and improve the system if the code is clear, well-structured, adheres to coding standards, and is easy to read and comprehend. It should be simple to test the software, with appropriate unit, integration, and end-to-end tests, so that updates may be confirmed without resulting in regressions. Without needing extensive rewriting, the software should be simple to grow, change, or adapt to new requirements in the future.
- **Security** - Sensitive information should be protected by the software, which should make sure it is handled, encrypted, and kept safely. It should have the appropriate systems in place to verify user identities and manage user access to various functionalities according to roles and permissions.
- **Scalability and flexibility** - It should be possible to extend the user base, data volume, and transaction volume of the software without having to make significant architectural adjustments. It must be flexible enough to adjust to shifting market dynamics, technological advancements, or corporate needs without requiring a lot of new work.
- **Compliance** - Complying with industry norms and regulations is crucial for software to ensure legal and operational compliance. Best practices, industry standards, and selected architecture patterns should all be adhered to by the code.


## 3. Outline a standard high level structure for a MERN stack application and explain the components


## 4. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

To successfully develop a website for a small business, a team needs a diverse set of knowledge and skills, spanning technical, creative, and managerial domains. These skills include:

- **Front-End Development** - Building a website or online application's user interface (UI) and user experience (UX) is the main goal of front-end development. In order to build the layout, design, and interactive features that users see and interact with in a browser, it entails using technologies such as HTML, CSS, and JavaScript. Making sure the website is functional, aesthetically pleasing, and responsive across a range of devices and browsers is the aim. Additionally, front-end developers maximise accessibility and speed to make the website user-friendly and quick to load.

- **Back-end development** - The server-side portion of web development, known as back-end development, focuses on the logic, functionality, and database administration that underpin a website or web application. It entails programming code to manage databases, process data, and handle server requests in languages like Python, Node.js, PHP, or Java. Back-end engineers build APIs, control user authentication, and handle business logic to make sure websites run smoothly. Their efforts guarantee the proper, safe, and effective operation of the website in the background.

- **Design and User experience** - In order to improve user interaction with a website or application, design and user experience (UX) concentrate on developing aesthetically pleasing and intuitive interfaces. Whereas UX makes ensuring the website is user-friendly, intuitive, and efficiently satisfies user demands, design deals with the structure, colours, font, and overall appearance.
Because they have a direct impact on user happiness, engagement, and retention, good design and user experience are crucial. A well-designed website increases performance, accessibility, and usability, increasing the likelihood that users will remain longer, have a good experience, and effectively accomplish their objectives.

- **Agile project management** - Agile methodology is a flexible approach to project management that places an emphasis on teamwork and ongoing progress through short development cycles, or sprints, that run anywhere from one to four weeks. Delivering tiny, incremental updates to a project is its main goal, which enables teams to quickly adjust to changes. Agile makes use of frameworks like Scrum, which have rituals like daily stand-ups and sprint planning in addition to roles like Scrum Master and Product Owner. Kanban is a different framework that emphasises using boards to visualise work for continuous delivery. User stories, which are brief, user-focused tasks that specify certain features, are an essential part of Agile. Workloads are prioritised according to company value and user needs thanks to backlog management. Agile encourages stakeholders to provide feedback often, which enables teams to make changes as the project progresses

- **Legal and regulatory compliance knowledge** - In Australia, the main areas of attention for web development legal and compliance rules are intellectual property, privacy, accessibility, and data protection. Businesses must obtain explicit consent and handle user information securely in order to collect, retain, and utilise personal data in accordance with the Privacy Act 1988 and the Australian Privacy Principles (APPs). In accordance with the Disability Discrimination Act of 1992, it is also advised that websites adhere to the WCAG (Web Content Accessibility Guidelines). Additionally, when developers use content from third parties, such as photos, typefaces, or code libraries, copyright regulations under the Copyright Act 1968 guarantee them against legal problems. These rules guarantee that websites are safe, accessible, and complied with Australian law.

- **Post-launch support and maintenance** - In website creation, post-launch support and maintenance refers to continuing efforts to make sure the website functions well, stays safe, and is updated. Important procedures include keeping an eye on performance to ensure quick load times and the best possible user experience, as well as updating software, plugins, and frameworks on a regular basis to address issues and enhance functionality. Security fixes are necessary to guard against vulnerabilities, and backups guarantee that data may be recovered in the event of a problem. In addition, maintenance entails repairing broken links, SEO-optimizing material, and offering technical assistance for user requests or problems. By following these procedures, the website is kept safe, secure, and in line with changing user requirements.




## 5. With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges


