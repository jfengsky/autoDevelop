import assert from 'assert'
import { getPageTypeName } from '../src/util/filter'

describe('test a', () => {
  it('test eqal', () => {
    const typeList = [{
      name: 'aaa',
      id: 1
    },{
      name: 'bbb',
      id: 2
    }]
    assert.equal('aaa', getPageTypeName(typeList, 1))
  })
})