function makeCar(manufacturer:string, model:string, ...options: {[key: string]: any}[]) {
    let car: {
      manufacturer:string, model:string, options: { [key:string]: any}
    } = {
      manufacturer: manufacturer,
      model: model,
      options: {}
    };
    for(let option of options) {
      for(let key in option) {
        car.options[key] = option[key];
      }
    }
    return car;
  }
  let car1 = makeCar('Toyato', 'Corola', {color: 'blue'}, {sunroof: true});
  let car2 = makeCar('Royal-royce', 'Phantom', {color: 'Black'});
  let car3 = makeCar('Supra', 'Toyato GR', {color: 'blue'}, {sunroof: true});
  console.log(car1, "\n", car2, "\n", car3);