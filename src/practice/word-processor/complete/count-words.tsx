export const countWords = (content: string) => {
  if (content.trim() === '') {
    return 0;
  }
  return content.trim().split(/\s+/).length;
};
