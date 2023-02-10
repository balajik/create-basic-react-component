/**
 * Function to return the basic storybook content of the component
 * @param {string} componentName
 * @param {object} fileExtension
 * @returns {object}
 */
export default (componentName, fileExtension) => {
  return {
    content: `import ${componentName} from './${componentName}';
${(fileExtension.typescript) ? `import { ComponentStory, ComponentMeta } from '@storybook/react';` : ''}
export default {
  component: ${componentName},
  parameters: {
    jest: ['${componentName}.test.js']
  }
}${(fileExtension.typescript) ? ` as ComponentMeta<typeof ${componentName}>` : ''};

const Template${(fileExtension.typescript) ? `: ComponentStory<typeof ${componentName}>` : ''} = (args) => {
  return <${componentName} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: 'Default'
};
`,
    extension: `.stories.${fileExtension.js}`
  }
};
