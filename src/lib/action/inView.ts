export function inView(
  node: HTMLElement,
  { root = null, rootMargin = "100px", threshold = 0.1, once = false } = {}
) {
  const io = new IntersectionObserver(
    ([entry]) => {
      node.toggleAttribute("data-inview", entry.isIntersecting);
      if (once && entry.isIntersecting) io.unobserve(node);
    },
    { root, rootMargin, threshold }
  );

  io.observe(node);
  return {
    destroy() {
      io.disconnect();
    },
  };
}
