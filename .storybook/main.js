module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    managerEntries: ['@storybook/addon-postcss'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: { 'react-docgen': false },
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (props) =>
                props.parent
                    ? !/node_modules/.test(props.parent.fileName)
                    : true,
        },
    },
};
