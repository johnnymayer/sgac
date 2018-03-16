export class Age {

  constructor(birthday){
    this.birthday = birthday
    this.convertDate = new Date(this.birthday).getTime()
    this.today = new Date().getTime()
    this.age = Math.floor((this.today - this.convertDate)) / 1000
    this.year = ((this.age/31540000))
    this.lifeLeft = 79 - this.year
  }

  convertAgeToSeconds() {
    this.modBirthday = Date.parse(this.birthday) / 1000
  }

  mercuryAge() {
    return(this.year / .24)
  }

  venusAge() {
    return(this.year / .62)
  }

  marsAge() {
    return(this.year / 1.88)
  }

  jupiterAge(){
    return(this.year / 11.88)
  }
}
