import { stripHtml } from 'string-strip-html';

const sanitizeObject = (object: any) => {
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'string') {
      object[key] = stripHtml(object[key]).result.trim();
    } else if (typeof object[key] === 'object') {
      object[key] = sanitizeObject(object[key]);
    }
  }

  return object;
};

export default sanitizeObject;
