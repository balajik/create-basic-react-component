/**
 * Function to return the boilerplate content for component
 * module css file
 * @param {string} _
 * @param {object} fileExtension
 * @returns {object}
 */
export default (_, fileExtension) => {
  return {
    content: `.text {
    color: #000000;
}
`,
    extension: `.module.${fileExtension.style}`
  }
};
