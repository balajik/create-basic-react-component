/**
 * Function to return the boilerplate content for component testing
 * with a basic snapshot test of the component
 * @param {string} componentName
 * @returns {object}
 */
export default (componentName) => {
  return {
    content: `import { render } from '@testing-library/react';

// Importing ${componentName} component
import ${componentName} from './${componentName}';

describe('${componentName} Component', () => {
  it('renders ${componentName} component and should be same as before', () => {
    const { asFragment } = render(<${componentName} text="text" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
`,
    extension: '.test.js'
  };
};
