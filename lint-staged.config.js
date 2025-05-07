export default {
    // This will lint and format Typescript and Javascript files
    // Runs linter first and then run prettier to format the files
    '**/*.(ts|tsx|js|jsx)': (filenames) => [
      `npx eslint --fix ${filenames.map((file) => `"${file}"`).join(' ')}`,
      `npx prettier --write ${filenames.map((file) => `"${file}"`).join(' ')}`,
    ],

    // This will Format MarkDown and JSON files
    '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,

    // This will format CSS and SCSS files
    '**/*.(css|scss)': (filenames) => `npx stylelint --fix ${filenames.join(' ')}`,
}