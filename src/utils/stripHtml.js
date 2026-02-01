export function stripHtml(html = '') {
  // Basic HTML stripper that works in browser and Node (very small and safe)
  if (!html) return '';
  // Remove tags
  const withoutTags = html.replace(/<[^>]*>/g, '');
  // Decode HTML entities for common cases
  return withoutTags.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}
