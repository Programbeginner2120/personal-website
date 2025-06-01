import { RouteButton } from "./buttons.interface";

export interface FeaturedProject {
    title: string;
    description: string;
    technologies: string[];
    buttons: RouteButton[];
}