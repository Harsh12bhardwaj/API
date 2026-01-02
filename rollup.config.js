import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const plugins = [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser()
];

export default [
    // Main bundle
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/index.umd.js',
                format: 'umd',
                name: 'Aures',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },

    // Individual modules
    {
        input: 'src/modules/profile.ts',
        output: [
            {
                file: 'dist/modules/profile.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/modules/profile.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },
    {
        input: 'src/modules/projects.ts',
        output: [
            {
                file: 'dist/modules/projects.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/modules/projects.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },
    {
        input: 'src/modules/experience.ts',
        output: [
            {
                file: 'dist/modules/experience.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/modules/experience.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },
    {
        input: 'src/modules/awards.ts',
        output: [
            {
                file: 'dist/modules/awards.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/modules/awards.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },
    {
        input: 'src/modules/certificates.ts',
        output: [
            {
                file: 'dist/modules/certificates.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/modules/certificates.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },
    {
        input: 'src/modules/skills.ts',
        output: [
            {
                file: 'dist/modules/skills.esm.js',
                format: 'esm',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/modules/skills.cjs.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins
    },

    // Type definitions
    {
        input: 'dist/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
];