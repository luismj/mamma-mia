import { addClass, div, img, p, section, text } from '../builders';

export default function hero() {
  //const logo = addClass(img('static/fancybear_white.png'), 'logo');
  const title = addClass(p(text('Mamma mia!')), 'hero-text-bold');
  const subtitle = addClass(p(text('Restaurant')), 'hero-text-light');

  const container = addClass(div(title, subtitle), 'container');

  const heroContent = addClass(div(container), 'hero-content');

  return addClass(section(heroContent), 'hero', 'splash');
}
