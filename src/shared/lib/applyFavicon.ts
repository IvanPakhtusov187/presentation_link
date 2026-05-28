const REACT_FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0f1a"/><g transform="translate(16 16)" fill="none" stroke="#61DAFB" stroke-width="1.5"><circle r="2.5" fill="#61DAFB" stroke="none"/><ellipse rx="10" ry="4"/><ellipse rx="10" ry="4" transform="rotate(60)"/><ellipse rx="10" ry="4" transform="rotate(120)"/></g></svg>`;

/** Принудительно ставит React-favicon (обходит кэш Safari и github.io) */
export function applyFavicon(): void {
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(REACT_FAVICON_SVG)}`;
  const fileUrl = `${import.meta.env.BASE_URL}favicon.svg?v=3`;

  document.querySelectorAll("link[rel*='icon']").forEach((node) => node.remove());

  const svgIcon = document.createElement('link');
  svgIcon.rel = 'icon';
  svgIcon.type = 'image/svg+xml';
  svgIcon.href = dataUrl;
  document.head.appendChild(svgIcon);

  const fallback = document.createElement('link');
  fallback.rel = 'alternate icon';
  fallback.type = 'image/svg+xml';
  fallback.href = fileUrl;
  document.head.appendChild(fallback);
}
