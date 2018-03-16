import { Sgac } from '../src/sgac'

describe('Sgac', function() {
  let testAge;

  beforeEach(function() {
    testAge = new Sgac('01/03/1986')
  })


  it('should get user age in seconds', function(){
    expect(testAge.age).toBeGreaterThan(1016111661)
  })

  it('should return user age on planet Mercury', function(){
    let userMercuryAge = testAge.mercuryAge()
    expect(userMercuryAge).toBe((testAge.year / .24))
  })

  it('should return user age on planet Venus', function () {
    let userVenusAge = testAge.venusAge()
    expect(userVenusAge).toBe((testAge.year / .62))
  })

  it('should return user age on Mars', function() {
    let userMarsAge = testAge.marsAge()
    expect(userMarsAge).toBe((testAge.year / 1.88))
  })

  it('should return user age on Jupiter', function() {
    let userJupiterAge = testAge.jupiterAge()
    expect(userJupiterAge).toBe((testAge.year / 11.88))
  })

  it('should return life left to live', function() {
    let userLifeLeft = testAge.lifeLeft()
    expect(userLifeLeft).toBe(testAge.lifeExpectancy)
  })
})
