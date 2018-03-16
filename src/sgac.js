export class Age {

  constructor(birthday){
    this.birthday = birthday
    this.convertDate = new Date(this.birthday).getFullYear()
    this.year = new Date().getFullYear()
    this.age = Math.floor((this.year - this.convertDate))
    this.lifeLeft = 79 - this.year
  }

  convertAgeToSeconds() {
    this.modBirthday = Date.parse(this.birthday) / 1000
  }

  mercuryAge() {
    return(this.age / .24)
  }

  venusAge() {
    return(this.age / .62)
  }

  marsAge() {
    return(this.age / 1.88)
  }

  jupiterAge(){
    return(this.age / 11.88)
  }


}
