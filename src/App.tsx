import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from '@/components/Header';
import Index from "./pages/Index";
import Play from "./pages/Play";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <Outlet />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create play route
const playRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/play',
  component: Play,
})

// Create leaderboard route
const leaderboardRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/leaderboard',
  component: Leaderboard,
})

// Create settings route
const settingsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  playRoute,
  leaderboardRoute,
  settingsRoute
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;