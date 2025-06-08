
import { Injectable, ElementRef, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observers = new Map<Element, IntersectionObserver>();
  
  /**
   * Observe an element for scroll animations
   * @param element - The element to observe
   * @param options - Intersection observer options
   * @returns A signal that indicates visibility
   */
  observeElement(
    element: ElementRef, 
    options: IntersectionObserverInit = {}
  ): Signal<boolean> {
    const isVisible = signal(false);
    
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible.set(entry.isIntersecting);
      });
    }, defaultOptions);
    
    observer.observe(element.nativeElement);
    this.observers.set(element.nativeElement, observer);
    
    return isVisible.asReadonly();
  }
  
  /**
   * Stop observing an element
   */
  unobserveElement(element: ElementRef): void {
    const observer = this.observers.get(element.nativeElement);
    if (observer) {
      observer.disconnect();
      this.observers.delete(element.nativeElement);
    }
  }
  
  /**
   * Clean up all observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}