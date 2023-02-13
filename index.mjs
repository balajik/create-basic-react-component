#! /usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';
import { Command } from 'commander';
const program = new Command();

// React component templates
import templates from './templates/index.mjs';

const executeScript = (componentName, options) => {
  const path = options.path || process.cwd();
  const fileExtension = {
    "style": (options.styles || 'css'),
    "js": options.typescript ? 'tsx' : 'jsx',
    "typescript": options.typescript
  };
  const componentDirectory = `${path}/${componentName}`;

  if(options.path && !fs.existsSync(options.path)) {
    fs.mkdirSync(options.path);
  }

  if (fs.existsSync(componentDirectory)) {
    console.error(chalk.red(`Provided component ${componentName} is already exists in the path.`));
    process.exit(1);
  }

  console.log(chalk.bold(`Started creating component: ${componentName}`));

  fs.mkdirSync(componentDirectory);

  templates.map((template) => {
    return template(componentName, fileExtension);
  })
  .forEach((template) => {
    const filePath = `${componentDirectory}/${componentName}${template.extension}`;

    fs.writeFileSync(
      filePath,
      template.content
    );

    console.log(`${chalk.bold('Created:')} ${chalk.blue(filePath)}`);
  });

  fs.appendFile(
    `${path}/index.js`,
    `export { default as ${componentName} } from './${componentName}/${componentName}';
  `, () => {
    console.log(`${chalk.bold(`Added the named export of ${componentName} component in`)} ${chalk.blue(`${path}/index.js`)}`);
  });

  console.log(`${chalk.bold(`Successfully created all the ${componentName} component files:`)} ${chalk.blue(componentDirectory)}`);
};

program
  .version('1.0.0', '-v, --version', 'Output the current version')
  .option('-s, --styles [extension]', 'Component module styles extension. [default: css]')
  .option('-p, --path [directory]', 'Directory path to create component. [default: current working directory]')
  .option('-ts, --typescript', 'Define component with or without typescript. [default: without typescript]')
  .arguments('<componentName>', 'Name of the component')
  .showHelpAfterError('add component name as (create-basic-rc Button)')
  .action(executeScript)
  .parse(process.argv);
