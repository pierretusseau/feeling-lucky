export const slugify = (text: string) => {
  return text
    .toString()                        // Ensure it's a string
    .toLowerCase()                     // Convert to lowercase
    .trim()                            // Trim whitespace from both sides
    .replace(/\s+/g, '-')              // Replace spaces with -
    .replace(/[^\w\-]+/g, '')          // Remove all non-word chars
    .replace(/\-\-+/g, '-')            // Replace multiple - with a single -
    .replace(/^-+/, '')                // Trim - from the start of the text
    .replace(/-+$/, '');               // Trim - from the end of the text
}