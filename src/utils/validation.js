import { sanitizeInput } from './sanitize';

export const TITLE_MAX = 100;
export const DESC_MAX = 500;

export function validateTask({ title, description }) {
  const errors = {};

  const cleanTitle = sanitizeInput(title);
  const cleanDesc = sanitizeInput(description);

  if (!cleanTitle) {
    errors.title = 'Title is required.';
  } else if (cleanTitle.length < 2) {
    errors.title = 'Title must be at least 2 characters.';
  } else if (cleanTitle.length > TITLE_MAX) {
    errors.title = `Title must be under ${TITLE_MAX} characters.`;
  }

  if (cleanDesc.length > DESC_MAX) {
    errors.description = `Description must be under ${DESC_MAX} characters.`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    clean: { title: cleanTitle, description: cleanDesc },
  };
}