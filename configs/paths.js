import { resolve, join } from 'path'

const root = resolve(__dirname, '..');
const dist = join(root, 'dist');
const src = join(root, 'src');
const node_modules = join(root, 'node_modules');

export default { root, dist, src, node_modules }
