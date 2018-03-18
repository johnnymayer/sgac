export class Sgac {

  constructor(birthday){
    this.birthday = birthday
    this.convertDate = new Date(this.birthday).getTime()
    this.today = new Date().getTime()
    this.age = Math.floor((this.today - this.convertDate)) / 1000
    this.year = ((this.age/31540000))
    this.ageExpEarth = 79 - this.year
    this.ageExpMercury = this.ageExpEarth / .24
    this.ageExpVenus = this.ageExpEarth / .62
    this.ageExpMars = this.ageExpEarth / 1.88
    this.ageExpJupiter = this.ageExpEarth / 11.88
  }

  convertAgeToSeconds() {
    this.modBirthday = Date.parse(this.birthday) / 1000
  }

  mercuryAge() {
    return(this.year / .24)
  }

  mercuryAgeLeft() {
    return(this.ageExpMercury)
  }

  venusAge() {
    return(this.year / .62)
  }

  venusAgeLeft() {
    return(this.ageExpVenus)
  }

  marsAge() {
    return(this.year / 1.88)
  }

  marsAgeLeft() {
    return(this.ageExpMars)
  }

  jupiterAge(){
    return(this.year / 11.88)
  }

  jupiterAgeLeft() {
    return(this.ageExpJupiter)
  }

  earthAgeLeft() {
    return (this.ageExpEarth)
  }

  ageOverEarth() {
    let lifeOver = Math.abs(Math.round(this.ageExpEarth))
    if (this.year > this.ageExpEarth) {
      return "You have outlived your life on Earth by " + lifeOver + " years."
    } else if (this.year < this.ageExpEarth) {
      return "You have got " + Math.round(this.ageExpEarth) + " years left to live, do something with it."
    } else {
      return 'You are dead.'
    }
  }

  ageOverMercury() {
    let lifeOverMercury = Math.abs(Math.round(this.ageExpMercury))
    if(this.mercuryAge() > this.ageExpMercury) {
      return "You have outlived your life on Mercury by " + lifeOverMercury + " years."
    } else if (this.mercuryAge() < this.ageExpMercury) {
      return "You have got " + Math.round(this.ageExpMercury) + " years left to live on Mercury, do something with it."
    } else {
      return "On Mercury, you are dead."
    }
  }

  ageOverVenus() {
    let lifeOverVenus = Math.abs(Math.round(this.ageExpVenus))
    if(this.venusAge() > this.ageExpVenus)
    {
      return "You have outlived your life on Venus by " + lifeOverVenus + " years."
    } else if (this.venusAge() < this.ageExpVenus) {
      return "You have got " + Math.round(this.ageExpVenus) + " years left to live on Venus, do something with it."
    } else {
      return "On Venus, you are dead."
    }
  }

  ageOverMars() {
    let lifeOverMars = Math.abs(Math.round(this.ageExpMars))
    if(this.marsAge() > this.ageExpMars)
    {
      return "You have outlived your life on Mars by " + lifeOverMars + " years."
    } else if (this.marsAge() < this.ageExpMars) {
      return "You have got " + Math.round(this.ageExpMars) + " years left to live on Mars, do something with it."
    } else {
      return "On Mars, you are dead."
    }
  }

  ageOverJupiter() {
    let lifeOverJupiter = Math.abs(Math.round(this.ageExpJupiter))
    if(this.jupiterAge() > this.ageExpJupiter)
    {
      return "You have outlived your life on Jupiter by " + lifeOverJupiter + " years."
    } else if(this.jupiterAge() < this.ageExpJupiter) {
      return "You have got " + Math.round(this.ageExpMars) + " years left to live on Jupiter, do something with it."
    } else {
      return "On Jupiter, you are dead."
    }
  }
}
