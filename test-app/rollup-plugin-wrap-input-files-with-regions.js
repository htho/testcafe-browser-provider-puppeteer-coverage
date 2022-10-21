import path from "path";
import MagicString from "magic-string";
import { createFilter } from "@rollup/pluginutils";

/** Wraps every source file in the bundle with region comments.
 *
 * @param {{include?: import("@rollup/pluginutils").FilterPattern, exclude?: import("@rollup/pluginutils").FilterPattern}} [options]
 * @returns {import("rollup").Plugin}
 */
export function wrapInputFilesWithRegions(options = {}) {
	const filter = createFilter(options.include, options.exclude);
	const cwd = process.cwd();
	return {
		name: "transform-code",
		transform(code, id) {
			if (!filter(id)) return;
			const m = new MagicString(code);
			const relId = path.relative(cwd, id);
			m.prepend(`\n// #region ${relId}\n`);
			m.append(`\n// #endregion ${relId}\n`);
			m.append(`// =============================================================================\n`);

			return {
				code: m.toString(),
				map: m.generateMap({hires: true}),
			};
		},
	};
}