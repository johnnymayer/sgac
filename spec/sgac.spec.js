import { Sgac } from '../src/sgac'

describe('Sgac', function() {
  let sgac;

  beforeEach(function() {
    sgac = new Sgac("Johnny", "01/03/1986")
  })

  it('creates an Sgac object with user name and birthday', function(){
    expect(sgac.name).toEqual("Johnny")
    expect(sgac.birthday).toEqual("01/03/1986")
  })

  it('converts user age into seconds', function(){
    sgac.ageMod()
    let seconds = 505123200
    expect(sgac.ageMod()).toEqual(seconds)
  })
})
