import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLi'
})
export class FirstLiPipePipe implements PipeTransform {

transform(html: string): string {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  const firstLi = div.querySelector('li');
  if (!firstLi) return '';

  // Get the text content and replace non-breaking spaces with normal spaces
  const text = (firstLi.textContent || '').replace(/\u00A0/g, ' ').trim();

  // Split the text into words and take only the first 3
  const firstThreeWords = text.split(/\s+/).slice(0, 3).join(' ');

  return firstThreeWords;
}

}
