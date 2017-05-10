import {entry, plugs, baseConfig} from './config'

export default Object.assign({}, {...baseConfig}, {plugins: plugs}, {entry})
