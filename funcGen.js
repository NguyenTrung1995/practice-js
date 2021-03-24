function* generator(i) {
 while(true) {
   yield i++;
 }
}

const gen = generator(0);

for (let i = 0; i < 10; i++) {
  console.log(gen.next());
}