/**
 * Sanitize user input to prevent XSS.
 * Strips HTML tags and dangerous characters.
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '')       // strip HTML tags
    .replace(/[<>"'`]/g, '')        // strip dangerous chars
    .trim()
    .slice(0, 500);                 // hard length cap
}

/**
 * Escape string for safe display (defense in depth).
 */
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}