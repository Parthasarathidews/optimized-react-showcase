# Optimized React Showcase

Create a complete React project using Vite that demonstrates Performance Optimization, Code Optimization, and SEO Optimization.

I do NOT want all examples inside one App.jsx file. Each concept must be implemented in separate folders, files, components, and routes.

Tech Stack

Use:

React

Vite

JavaScript (not TypeScript)

React Router DOM

Tailwind CSS

react-helmet-async

Install all required dependencies.

Project Structure

Create the project using the following structure:

src/
│
├── performance-optimization/
│ ├── ReactMemo.jsx
│ ├── UseMemo.jsx
│ ├── UseCallback.jsx
│ ├── LazyLoading.jsx
│ ├── Debouncing.jsx
│ ├── Throttling.jsx
│ ├── ImageLazyLoading.jsx
│ └── Virtualization.jsx
│
├── code-optimization/
│ ├── reusable-components/
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ └── ReusableComponentExample.jsx
│ │
│ ├── custom-hooks/
│ │ ├── useFetch.js
│ │ └── CustomHookExample.jsx
│ │
│ ├── services/
│ │ ├── api.js
│ │ └── ApiServiceExample.jsx
│ │
│ ├── ComponentSeparation.jsx
│ ├── CleanStateManagement.jsx
│ └── ConstantsExample.jsx
│
├── seo-optimization/
│ ├── MetaTags.jsx
│ ├── SemanticHTML.jsx
│ ├── ImageOptimization.jsx
│ ├── SEOHelmet.jsx
│ ├── StructuredData.jsx
│ └── SEOFriendlyLinks.jsx
│
├── components/
│ ├── Layout.jsx
│ ├── Navbar.jsx
│ └── Sidebar.jsx
│
├── pages/
│ └── Home.jsx
│
├── App.jsx
├── main.jsx
└── index.css

Main Requirements

1. Separate Implementation

Every optimization concept must have:

Its own component/file

Its own route

A working example

Clear comments explaining the important code

A simple UI to test the functionality

Do NOT put all implementations inside App.jsx.

App.jsx should mainly handle:

Routing

Layout

Navigation

2. Performance Optimization Section

Create separate routes and working examples for:

React.memo

Route:

/performance/react-memo

Demonstrate:

A parent component with state

A child component

Show unnecessary re-renders without memoization

Use React.memo to prevent unnecessary child re-renders

Add console.log so re-renders can be observed

useMemo

Route:

/performance/use-memo

Demonstrate:

An expensive calculation

A separate state that causes parent re-renders

Show how useMemo prevents recalculating the expensive function unnecessarily

Add console.log to demonstrate when calculation runs

useCallback

Route:

/performance/use-callback

Demonstrate:

Parent component

Memoized child component

Function passed as props

Show unnecessary child re-render without useCallback

Use useCallback to optimize the function reference

Lazy Loading

Route:

/performance/lazy-loading

Demonstrate:

React.lazy

Suspense

A separate heavy component

Loading fallback

Load the component dynamically

Create the heavy component in a separate file.

Debouncing

Route:

/performance/debouncing

Demonstrate:

Search input

API simulation

Prevent API call on every keystroke

Only perform the action after the user stops typing

Use a custom debounce implementation or custom hook.

Throttling

Route:

/performance/throttling

Demonstrate:

Scroll event or mouse movement event

Limit how frequently the function executes

Show a counter or timestamp

Use a custom throttle implementation.

Image Lazy Loading

Route:

/performance/image-lazy-loading

Demonstrate:

Multiple images

loading="lazy"

Proper width and height

Proper alt text

Explain how lazy loading improves initial page performance

Virtualization

Route:

/performance/virtualization

Use a large list with thousands of items.

Use a virtualization library such as:

react-window

Demonstrate rendering only visible items.

Install required dependency.

3. Code Optimization Section

Create separate routes and examples for:

Reusable Components

Route:

/code/reusable-components

Create reusable components:

Button

Card

Demonstrate multiple variants and reuse.

Avoid duplicated JSX.

Custom Hooks

Route:

/code/custom-hooks

Create:

useFetch.js

Demonstrate:

Fetching API data

Loading state

Error state

Data state

Use the hook in CustomHookExample.jsx.

API Service Layer

Route:

/code/api-service

Separate API logic from UI.

Create:

services/api.js

Example:

getUsers()
getPosts()

The UI component should not directly contain fetch logic.

Use proper:

try/catch

Error handling

Loading state

Component Separation

Route:

/code/component-separation

Demonstrate breaking a large component into smaller components.

Create an example such as:

UserProfile/
├── UserProfile.jsx
├── UserHeader.jsx
├── UserDetails.jsx
└── UserActions.jsx

Show clean component composition.

Clean State Management

Route:

/code/state-management

Demonstrate:

Keep state close to where it is needed

Avoid unnecessary global state

Avoid duplicated state

Derive values instead of storing duplicate state

Create a practical example such as a shopping cart or user list.

Constants and Configuration

Route:

/code/constants

Create separate constant/config files.

For example:

constants/api.js
constants/routes.js

Demonstrate avoiding hardcoded repeated values.

4. SEO Optimization Section

Create separate routes and examples.

Meta Tags

Route:

/seo/meta-tags

Use react-helmet-async.

Include:

title

meta description

keywords

robots

Semantic HTML

Route:

/seo/semantic-html

Demonstrate proper use of:

header

nav

main

section

article

aside

footer

h1 to h3 hierarchy

Explain through comments why semantic HTML is useful for SEO and accessibility.

Image Optimization

Route:

/seo/image-optimization

Demonstrate:

Descriptive alt text

width

height

lazy loading

optimized image usage

SEO Helmet

Route:

/seo/helmet

Create dynamic page metadata using react-helmet-async.

Each route should have a different title and description.

Structured Data

Route:

/seo/structured-data

Add JSON-LD structured data.

Use a valid example such as:

Organization schema
or
Article schema

Add the JSON-LD script correctly using React.

SEO Friendly Links

Route:

/seo/friendly-links

Demonstrate:

Good:

Bad:

Explain through UI/comments why descriptive anchor text is better.

5. Navigation

Create a reusable Sidebar with three main categories:

Performance Optimization

Code Optimization

SEO Optimization

Each category should contain links to all examples.

Example:

Performance Optimization

React.memo

useMemo

useCallback

Lazy Loading

Debouncing

Throttling

Image Lazy Loading

Virtualization

Code Optimization

Reusable Components

Custom Hooks

API Service

Component Separation

State Management

Constants

SEO Optimization

Meta Tags

Semantic HTML

Image Optimization

React Helmet

Structured Data

SEO Friendly Links

6. UI Requirements

Use Tailwind CSS.

Create a clean developer learning dashboard.

Layout:

Sidebar on the left

Navbar/Header at the top

Main content area

Responsive design

Each example page should contain:

Topic title

Short explanation

Why it is useful

Working interactive example

Important code explanation

Expected result

Use reusable UI components where possible.

7. Home Page

Create a dashboard homepage.

Show three cards:

Performance Optimization

Code Optimization

SEO Optimization

Each card should display:

Topic description

Number of examples

Button to explore

8. Code Quality Rules

Follow these rules:

Use functional components

Use arrow functions

Use meaningful variable names

Avoid unnecessary state

Avoid duplicated code

Keep components small

Separate business logic from UI

Add comments only where they help explain important optimization concepts

Use proper error handling

Use unique keys when rendering lists

Use React best practices

9. Important Requirement

This is a learning project for a beginner.

Therefore, every example should be:

Simple

Working

Easy to understand

Independently testable

Properly separated into files

Do not over-engineer the project.

Do not create fake or incomplete implementations.

Make sure every route works without errors.

10. Final Output

After creating the project:

Install all dependencies

Configure Tailwind CSS

Configure React Router

Configure HelmetProvider

Create all folders and files

Implement every optimization example

Ensure imports are correct

Fix all build errors

Run the project

Verify that all routes work

At the end, provide:

Final project folder structure

List of installed dependencies

List of all routes

Brief explanation of how to run the project

Do not skip any of the implementations.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3479d950-08d8-4929-830f-fb57a4feded2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
