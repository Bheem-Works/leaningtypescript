// Recording the michi activity;

class Cat {
  name: string;
  event: string;

  constructor(name: string, event: string) {
    this.name = name;
    this.event = event;
  }

  description() {
    console.log(this.name, this.event);
  }
}

const todayCat = new Cat("michi", "walking with us");
const todayCatFood = new Cat("michi", "thupa");
todayCatFood.description();
todayCat.description();
