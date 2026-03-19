# Changelog

## [1.0.0] - New Angular 19 Portfolio Update

### Added
- **Core Architecture:** Bootstrapped Angular 19+ application with SSR (Server-Side Rendering) and modern routing configurations.
- **Theming:** Implemented Dark/Light mode thematic system controlled by CSS variables and local storage caching, defaulting to Dark Mode.
- **Navigation:** Built a responsive, pill-shaped floating navigation bar equipped with SVGs for mobile compatibility.
- **Dialog System:** Architected a custom `DialogService` to manage floating, modern modal components used for project details and skill displays. The dialog box includes modern backdrop filter, dynamic grid data binding, and intelligent center-aligned positioning.
- **Home Page:** Created an aesthetically pleasing landing experience showcasing user details with floating, gradient-infused card hovering effects via custom CSS box-shadows.
- **Projects & Skills Page:** Organized works in a responsive grid Layout, defaulting to Reverse Chronological order.
- **Timeline Page:** Added a center-aligned alternating timeline structure mapping professional experience and education seamlessly.
- **Youtube Page:** Added dynamic grouping for embedded video categories (Playgrounds/Podcasts) and a dedicated Subscription portal.
- **Contact Info:** Added a dedicated contact directory with relevant outward links and PDF download readiness.
- **Dynamic Routing Transition:** Wired Angular Router Events (`NavigationStart`, `NavigationEnd`) into the root component to provide a comprehensive, 300ms smooth opacity fade-out and fade-in visual experience without tearing standard Angular animations.
- **Micro-Animations:** Introduced infinite smooth gradient shifting on standard textual headings and Quicksand typography integrations.

### Changed
- Refactored all standard routing to use Lazy Loading implementations bundled with global arbitrary route resolving (`delayResolver`) for consistent transitional behaviors.
- Replaced standard link labels with intuitive SVG icons within Mobile environments.
- Dropped all deprecated `webkit` specific clipping paths in favor of mainstream browser clip integrations.
- Modified mobile DialogBox logic from "bouncing" cubic beziers to more mature `ease-out` slide-in motions.
- Changed default global background for Light mode variant from a harsh white (`#ffffff`) to a warmer grey/peach (`#faf8f5`).

### Fixed
- Fixed critical Angular Routing UX bug where cached dynamic imports would instantly snap the router, ignoring route transition delays.
- Resolved memory leaks associated with navigating away from globally hoisted Dialog Boxes by forcing `DialogService.close()` on route `NavigationStart` events.
- Fixed layout clipping and horizontal overflow issues triggered by overflowing Navigation menu lengths.
- Added strict multi-line compliance for internal JSON rendering engines per specific constraint mappings (`bda.json`).
