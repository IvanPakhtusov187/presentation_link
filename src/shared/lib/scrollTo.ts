export function scrollToSection(href: string): void {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
