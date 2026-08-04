import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import Home from './App';
import Portfolio from './Portfolio';
import WeatherDiscoveryApp from "./WeatherDiscoveryApp";
import CharacterTraitBuilder from './CharacterTraitBuilder'
import Artconnect from './Artconnect'

const rootRoute = createRootRoute({
    component: () => <Outlet />
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
});

const portfolioRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/portfolio',
    component: Portfolio
});

const project1Route = createRoute({
    getParentRoute: () => rootRoute,
    path: '/portfolio/weather-discovery-app',
    component: WeatherDiscoveryApp
});

const project2Route = createRoute({
    getParentRoute: () => rootRoute,
    path: '/portfolio/character-trait-builder',
    component: CharacterTraitBuilder
});

const project3Route = createRoute({
    getParentRoute: () => rootRoute,
    path: '/portfolio/artconnect',
    component: Artconnect
});

export const routeTree = rootRoute.addChildren([
    indexRoute,
    portfolioRoute,
    project1Route,
    project2Route,
    project3Route
]);

export const router = createRouter({ routeTree });



