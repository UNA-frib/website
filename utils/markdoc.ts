import { Node } from '@markdoc/markdoc';

export function getExcerpt(node: Node, wordLimit: number = 25): string {
  let text = '';

  function walk(n: Node) {
    if (n.type === 'text' && typeof n.attributes.content === 'string') {
      text += n.attributes.content + ' ';
    }
    if (n.children) {
      for (const child of n.children) {
        walk(child);
      }
    }
  }

  walk(node);

  const words = text.trim().split(/\s+/);
  
  if (words.length <= wordLimit) return text.trim();

  return words.slice(0, wordLimit).join(' ') + '...';
}
