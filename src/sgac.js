export class Sgac {

  constructor(name, birthday){
    this.name = name
    this.birthday = birthday
    this.modBirthday = new Date()
  }

  ageMod() {
    this.modBirthday = Date.parse(this.birthday) / 1000
    let today = Math.floor(Date.now() / 1000)
    console.log(today)
    return (today - this.modBirthday)
  }


}
