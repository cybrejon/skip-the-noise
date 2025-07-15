/**
 * Optional settings for the `useIntersectionObserver` hook.
 *
 * @prop rootMargin `string | undefined`
 * @prop threshold `number | undefined`
 */
interface IntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number;
}

/**
 * A hook that sets `IntersectionObserver`s for any elements.
 * @param options The options for the intersection observer.
 * Consists of the `threshold` property as a number.
 * @returns A set of readonly getters and a single setter.
 */
export function useIntersectionObserver(
  options: IntersectionObserverOptions = { threshold: 0, rootMargin: "0px" }
) {
  /**
   * The element to observe.
   */
  let ref: HTMLElement | null = $state(null);
  /**
   * The containing element.
   * @default document - The base element of the webpage
   */
  // let root: Element | Document | null = $state(null);
  /**
   * Marks whether to unobserve the `ref` element after it intersects the `root`.
   */
  let once: boolean = $state(false);
  /**
   * Checks whether the `ref` element is intersecting the `root` element.
   */
  let intersecting: boolean = $state(false);
  /**
   * An instance of the `IntersectionObserver` API.
   */
  const observer: IntersectionObserver = $state(
    new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
      },
      { ...options }
    )
  );

  $effect(() => {
    if (ref) {
      // observer = new IntersectionObserver(
      //   ([entry]) => {
      //     intersecting = entry.isIntersecting;
      //   },
      //   { ...options }
      // );

      observer.observe(ref);

      if (intersecting && once) {
        observer.unobserve(ref);
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  });

  return {
    get intersecting() {
      return intersecting;
    },
    get ref() {
      return ref;
    },
    set ref(element) {
      ref = element;
    },
    set once(value: boolean) {
      once = value;
    },
    // set root(element: Element | Document) {
    //   root = element;
    // },
  };
}
