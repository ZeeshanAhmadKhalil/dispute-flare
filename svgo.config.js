const svgoConfig = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: { removeViewBox: false },
            },
        },
    ],
};

module.exports = svgoConfig