
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

const webappPath = 'src/main/webapp/components';
const webappStatic = 'src/main/resources/static';

module.exports = [{
    input: `${webappPath}/login/login.jsx`,
    output: {
        file: `${webappStatic}/login.js`,
        format:  'cjs'
    },
    plugins: [
        resolve(),
        json(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        postcss({
                  extensions: [ '.css' ],
            extract: true
        })
    ],
    external: ['react', 'react-dom', 'axios'],
},
    {
        input: `${webappPath}/signup/signup.jsx`,
        output: {
            file: `${webappStatic}/signup.js`,
            format:  'cjs'
        },
        plugins: [
            resolve(),
            json(),
            babel({
                exclude: 'node_modules/**' // only transpile our source code
            }),
            postcss({
                extensions: [ '.css' ],
                extract: true
            })
        ],
        external: ['react', 'react-dom', 'axios'],
    }]