import { Age } from '../src/sgac'

describe('Age', function() {
  let testAge;

  beforeEach(function() {
    testAge = new Age('01/03/1986')
  })

  it('should get user age in seconds', function(){
    expect(testAge.age).toBeGreaterThan(1016111661)
  })
})
