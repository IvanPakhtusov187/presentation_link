/** Путь к файлу из public/ с учётом Vite base (GitHub Pages subdirectory) */
export function assetUrl(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
