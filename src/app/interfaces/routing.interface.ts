export interface RouteButton {
  label: string;
  route?: string;         // For normal routing
  fragment?: string;      // For in-page anchors (e.g., #about)
  external?: boolean;     // Optional flag if external link
}