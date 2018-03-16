import { Age } from '../src/sgac'

describe('Age', function(){
  let testAge;

  beforeEach(function(){
    testAge = new Age('01/03/1986')
  })

  it('should get user age in seconds', function(){
    expect(testAge.year).toBeGreaterThanOrEqualTo(32)
  })

  it('should return user age on planet Mercury', function(){
    let userMercuryAge = testAge.mercuryAge()
    expect(userMercuryAge).toBe((testAge.year / .24))
  })

  it('should return user age on planet Venus', function (){
    let userVenusAge = testAge.venusAge()
    expect(userVenusAge).toBe((testAge.year / .62))
  })

  it('should return user age on Mars', function(){
    let userMarsAge = testAge.marsAge()
    expect(userMarsAge).toBe((testAge.year / 1.88))
  })

  it('should return user age on Jupiter', function(){
    let userJupiterAge = testAge.jupiterAge()
    expect(userJupiterAge).toBe((testAge.year / 11.88))
  })
})
