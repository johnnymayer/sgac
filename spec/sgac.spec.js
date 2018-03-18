import { Sgac } from '../src/sgac'

describe('Sgac', () => {
  let testAge;
  let testAgeOver;

  beforeEach(function() {
    testAge = new Sgac('01/03/1986')
  })

  beforeEach(function(){
    testAgeOver = new Sgac('01/03/1886')
  })

  it('should get user age in seconds', () => {
    expect(testAge.age).toBeGreaterThan(1016111661)
  })

  it('should return user age on planet Mercury', () => {
    let userMercuryAge = testAge.mercuryAge()
    expect(userMercuryAge).toBe((testAge.year / .24))
  })

  it('should return user age on planet Venus', () => {
    let userVenusAge = testAge.venusAge()
    expect(userVenusAge).toBe((testAge.year / .62))
  })

  it('should return user age on Mars', () => {
    let userMarsAge = testAge.marsAge()
    expect(userMarsAge).toBe((testAge.year / 1.88))
  })

  it('should return user age on Jupiter', () => {
    let userJupiterAge = testAge.jupiterAge()
    expect(userJupiterAge).toBe((testAge.year / 11.88))
  })

  it('should return user years left to live on Earth', () => {
    let userLifeLeft = testAge.earthAgeLeft()
    expect(userLifeLeft).toBe(testAge.ageExpEarth)
  })

  it('should return user years left to live on Mercury', () => {
    let userLifeLeftMercury = testAge.mercuryAgeLeft()
    expect(userLifeLeftMercury).toBe(testAge.ageExpMercury)
  })

  it('should return user years left to live on Venus', () => {
    let userLifeLeftVenus = testAge.venusAgeLeft()
    expect(userLifeLeftVenus).toBe(testAge.ageExpVenus)
  })

  it('should return user years left to live on Mars', () => {
    let userLifeLeftMars = testAge.marsAgeLeft()
    expect(userLifeLeftMars).toBe(testAge.ageExpMars)
      })
  it('should return user years left to live on Jupiter', () => {
    let userLifeLeftJupiter = testAge.jupiterAgeLeft()
    expect(userLifeLeftJupiter).toBe(testAge.ageExpJupiter)
  })

  it('should return user years exceeded past life expectancy on Earth', () => {
    let lifeOver = testAgeOver.ageOverEarth()
    expect(lifeOver).toBe('You have outlived your life on Earth by 53 years.')
  })

  it('should return user years exceeded past life expectancy on Mercury', () => {
    let lifeOverMercury = testAgeOver.ageOverMercury()
    expect(lifeOverMercury).toBe('You have outlived your life on Mercury by 222 years.')
  })

  it('should return user years exceeded past life expectancy on Venus', () => {
    let lifeOverVenus = testAgeOver.ageOverVenus()
    expect(lifeOverVenus).toBe('You have outlived your life on Venus by 86 years.')
  })

  it('should return user years exceeded past life expectancy on Mars', () => {
    let lifeOverMars = testAgeOver.ageOverMars()
    expect(lifeOverMars).toBe('You have outlived your life on Mars by 28 years.')
  })

  it('should return user years exceeded past life expectancy on Jupiter', () => {
    let lifeOverJupiter = testAgeOver.ageOverJupiter()
    expect(lifeOverJupiter).toBe('You have outlived your life on Jupiter by 4 years.')
  })
})
