// Recording the michi activity;

class Cat {
  name: string;
  event: string;

  constructor(name: string, event: string) {
    this.name = name;
    this.event = event;
  }
  showName() {
    console.log(this.name);
  }
}

const todayCat = new Cat("michi", "walking with us");
todayCat.showName();
