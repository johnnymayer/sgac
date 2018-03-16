export class Age {

  constructor(birthday){
    this.birthday = birthday
    this.convertDate = new Date(this.birthday).getTime()
    this.today = new Date().getTime()
    this.age = Math.floor((this.today - this.convertDate)) / 1000
    this.year = ((this.age/31540000))
  }

  convertAgeToSeconds() {
    this.modBirthday = Date.parse(this.birthday) / 1000
  }

  ageMod() {
    let today = Math.floor(Date.now() / 1000)
    return (today - this.modBirthday)
  }
}
