name = "kaishu";

const person = {
  name: "Tom",
  hello() {
    console.log("hello " + this.name);
    a();
  },
  hello2: () => {
    console.log("hello " + this.name);
    a();
  },
};

person.hello();

const a = () => console.log("hello " + this.name);
