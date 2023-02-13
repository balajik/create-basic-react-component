# create-basic-react-component
A CLI to create all the necessary files to build a react components.

## Install
```
npm i -g create-basic-react-component
```

## Usage
```
create-basic-rc <component name> [options]

  Options:
    -h, --help                display help for command
    -V, --version             output the current version
    -s, --styles [extension]  component module styles extension. [default: css]
    -p, --path [directory]    directory path to create component. [default: current working directory]
    -ts, --typescript         define component with or without typescript. [default: without typescript]
```

## Example

### Default options
Run the below command with the component name
```
create-basic-rc Button
```
and basic react componenent will be created with all required files. If the options are not provided it will fallback to default option.

Here is the structure of the component folder
```
Button
├── Button.jsx
├── Button.test.js
├── Button.module.css
└── Button.stories.jsx
```

### Styles option
```
create-basic-rc Button -s scss or create-basic-rc Button --styles scss
```
will create styles with the scss
```
Button
├── Button.jsx
├── Button.test.js
├── Button.module.scss
└── Button.stories.jsx
```

### Typescript option
```
create-basic-rc Button -ts or create-basic-rc Button --typescript
```
will create react components with typescript
```
Button
├── Button.tsx
├── Button.test.js
├── Button.module.css
└── Button.stories.tsx
```

### Folder path option
```
create-basic-rc Button -p src/components or create-basic-rc Button --path src/components
```
will create the react components in the specified folder
```
src
└──components
    └──Button
        ├── Button.tsx
        ├── Button.test.js
        ├── Button.module.css
        └── Button.stories.tsx
```

## Tools used
1. commander
2. chalk