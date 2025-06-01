export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface SocialsButton {
    href: string;
    iconClasses?: string[];
    label?: string;
    isEmail: boolean;
}

export interface RouteButton {
  label: string;
  route?: string;         // For normal routing
  fragment?: string;      // For in-page anchors (e.g., #about)
  external?: boolean;     // Optional flag if external link
}