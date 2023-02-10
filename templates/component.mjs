/**
 * Function to return the boilerplate content for react functional component
 * jsx file
 * @param {string} componentName
 * @param {object} fileExtension
 * @returns {object}
 */
export default (componentName, fileExtension) => {
  return {
    content: `import React from 'react';

// Importing styles
import styles from './${componentName}.module.${fileExtension.style}';
${(fileExtension.typescript) ? `
interface ${componentName}Props {
  /**
    Display content of the ${componentName}
  */
  text: string
}`: ''}
/**
 * ${componentName} component
 * @param {string} text
 * @returns {element}
 */
const ${componentName} = ({ text }${(fileExtension.typescript) ? `: ${componentName}Props` : ''}) => {
  return (
    <div
      data-testid="${componentName}"
      className={styles.text}>
      {text}
    </div>
  );
};

export default ${componentName};
`,
    extension: `.${fileExtension.js}`
  };
};
