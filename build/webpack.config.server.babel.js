import nodeExternals from 'webpack-node-externals'

import {plugs, baseConfig, resolve, node, externals} from './config'
import {serverEntry} from './server.config'

export default Object.assign(
  {},
  {...baseConfig},
  {resolve},
  {node},
  {externals},
  {
    entry: serverEntry,
  },
  {
    target: 'node',
  },
)
