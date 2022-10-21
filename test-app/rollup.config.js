import { wrapInputFilesWithRegions } from './rollup-plugin-wrap-input-files-with-regions';

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		wrapInputFilesWithRegions(),
	]
};
