# Job Listings with Filtering

This is a solution to the [Job Listings with Filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Ideally, the app allows users to filter job listings based on specific tags (Role, Level, Languages, Tools).

## Table of contents

- [Job Listings with Filtering](#job-listings-with-filtering)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Filter job listings based on specific categories.

### Screenshot

![](./design/desktop-design.jpg)

## My process

### Built with

- [React](https://reactjs.org/) - JS Library
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- Mobile-first workflow
- Flexbox & CSS Grid

### What I learned

One of the main challenges was implementing the filtering logic to ensure that a job is only displayed if it contains **ALL** the selected tags (strict filtering).

Here is the logic I used to filter the jobs:

```js
const filteredJobs = data.filter((job) => {
  // 1. If no filters are selected, show all jobs
  if (filters.length === 0) return true;

  // 2. Combine all job tags into a single array
  const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

  // 3. Check if EVERY selected filter exists in the job's tags
  return filters.every((filter) => jobTags.includes(filter));
});
```
