export function splitTableText(text) {
  if (text.includes('- ')) {
    return text.split('- ')
  }
  return text
}
