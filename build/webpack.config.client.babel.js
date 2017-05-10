import nodeExternals from 'webpack-node-externals'

import {plugs, baseConfig, resolve, node, externals} from './config'
import {clientEntry} from './client.config'

export default Object.assign(
  {},
  {...baseConfig},
  {resolve},
  {node},
  {externals},
  {
    entry: clientEntry,
  },
  {
    target: 'node',
  },
)
