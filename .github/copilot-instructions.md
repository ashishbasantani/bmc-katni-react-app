# AI Agent Instructions for BMC Medical Katni

## Project Overview
BMC Medical Katni is a React 19 + TypeScript medical website for a healthcare facility in Katni, Madhya Pradesh. Built with Create React App, it features component-based architecture with Header and Hero sections showcasing medical services.

## Architecture & Key Components

### Component Structure
- **App.tsx**: Root component that composes Header and Hero
- **Header** ([src/components/Header/Header.tsx](src/components/Header/Header.tsx)): Two-tier navigation
  - Top bar: Tagline, contact info (location, email, phone), and icons
  - Navbar: Logo, navigation links (Home, Services, About, Contact)
- **Hero** ([src/components/Hero/Hero.tsx](src/components/Hero/Hero.tsx)): Landing section
  - Background image with overlay text
  - "Your Health, Our First Priority" tagline with BMC badge
  - Scroll indicator
  
### Asset Organization
- Images in `src/assets/`: BMC logo, doctor image
- Icons in `src/assets/icons/`: phone, mail, location icons
- All components pair `.tsx` files with `.css` files for styling

## Development Workflow

### Build & Run Commands
```bash
npm start          # Dev server on http://localhost:3000
npm run build      # Production build to build/ folder
npm test           # Run tests in watch mode
npm run eject      # One-way operation - full Webpack control (avoid)
```

### TypeScript Configuration
- Target: ES5 with JSX react-jsx syntax
- Strict mode enabled - all types must be explicit
- Components use `React.FC` type annotation pattern
- Paths are relative imports (e.g., `"../../assets/icons/phone.png"`)

## Coding Patterns & Conventions

### Component Pattern
```tsx
import React from "react";
import "./ComponentName.css";
// Import assets
import image from "../../assets/imageName.png";

const ComponentName: React.FC = () => {
  return (
    <section className="component-name">
      {/* Content */}
    </section>
  );
};

export default ComponentName;
```

### Styling Approach
- Component CSS files co-located with components
- CSS class naming uses kebab-case matching component structure
- Background images set via inline `style={{ backgroundImage: `url(${image})` }}`
- Icons implemented as `<img>` tags with alt text

### Import Conventions
- Relative paths for assets: `"../../assets/imageName.png"`
- Local CSS imports immediately after React imports
- Assets imported as variables, not directly in JSX strings

## State Management
- **Library**: Zustand (lightweight, scalable state management)
- **Store Location**: `src/store/` directory with separate files per domain (e.g., `appointmentStore.ts`, `userStore.ts`)
- **Pattern**: Create custom hooks that wrap store selectors for component consumption
- **Use Cases**: Appointments, navigation state, form submissions, modal visibility, user session, loading/error states
- **Example Structure**:
  ```ts
  // src/store/appointmentStore.ts
  import create from 'zustand';
  interface AppointmentState { /* ... */ }
  export const useAppointmentStore = create<AppointmentState>(/* ... */);
  ```

## Animations & Interactive Features
- **Library**: Framer Motion for declarative animations
- **Implementations Required**:
  - **Fade-in animations** on component mount (Hero, Header, Cards)
  - **Parallax scrolling** in Hero section with image offset
  - **Scroll-triggered animations** for elements entering viewport
  - **Hover effects** on buttons, cards, and interactive elements
  - **Smooth page transitions** on navigation
  - **Micro-interactions**: Button press feedback, notification toasts, loading spinners
  - **Responsive animations**: Reduced motion on mobile, performance-optimized
- **Performance**: Use `will-change` CSS, GPU acceleration for transforms
- **Mobile**: Respect `prefers-reduced-motion` for accessibility

## Modern Styling Conventions
- **Color Scheme**: Gradient backgrounds (medical theme: blues, teals, whites)
- **Effects**:
  - Glassmorphism: Semi-transparent backgrounds with backdrop blur
  - Neumorphism: Soft shadows and highlights for depth
  - Smooth transitions: 300-500ms duration for interactive elements
- **Responsive Design**: Mobile-first approach with fluid typography/spacing
- **CSS Architecture**: Use CSS variables for theming and consistent spacing/colors
  ```css
  :root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --glass-bg: rgba(255, 255, 255, 0.1);
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  ```

## API Integration
- **Backend Communication**: Components connect to backend API for appointments, doctor info, services
- **Service Layer**: Create API client in `src/services/api.ts` with typed endpoints
- **Environment Variables**: Store API base URL in `.env.local` (e.g., `REACT_APP_API_URL=http://localhost:3001`)
- **Custom Hooks**: Wrap API calls in custom hooks (`src/hooks/useAppointments.ts`, `useServices.ts`, etc.)
- **Error Handling**: Implement error boundaries and user-facing error messages
- **Loading States**: Use state management for loading/error/success states in async operations
- **TypeScript**: Define interfaces for API responses in `src/types/api.ts`

## Client-Side Routing
- Project uses client-side routing for navigation
- Header implements navigation menu with links to: Home, Services, Doctors, About Us, Free Camps
- Additional pages accessible via dropdown "More" menu: Gallery, Careers, Contact
- "Book Appointment" CTA button should trigger appointment flow
- **Future Implementation**: Use React Router for route definitions and Link components
  - Convert `<a href>` tags in Header to `<Link>` components
  - Create page components in `src/pages/` directory
  - Define routes in App.tsx or separate routing configuration

## Testing & Linting
- ESLint configured with React App preset
- Testing libraries available: @testing-library/react, jest-dom
- Tests use Create React App's default Jest runner
- No custom ESLint rules defined - uses CRA defaults

## Critical Integration Points
- **React DOM**: Mounts in `#root` element from [public/index.html](public/index.html)
- **Web Vitals**: Performance monitoring integrated but disabled by default
- **Strict Mode**: Enabled to catch potential issues in development
- **TypeScript Compilation**: Isolated modules enabled for build compatibility

## When Adding Features
- Create new components in `src/components/ComponentName/` directory
- Include `ComponentName.tsx` and `ComponentName.css` pair
- Use `React.FC` type annotation for functional components
- Import assets from relative `../../assets/` paths
- Add new routes to Header navigation if needed
- Follow existing import/export patterns (named exports in components)
