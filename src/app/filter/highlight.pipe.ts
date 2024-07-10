import { Pipe, PipeTransform } from '@angular/core';
import hljs from 'highlight.js';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, language: string): string {
    if (!value) return value;
    const highlightedCode = hljs.highlight(value, { language }).value;
    return highlightedCode;
  }
}
