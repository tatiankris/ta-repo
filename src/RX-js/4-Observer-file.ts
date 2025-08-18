//observer = subscriber

//Это объект, передаваемый в метод subscribe Observable

const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

//observable.subscribe(observer);

// Наблюдатели — это всего лишь объекты с тремя обратными вызовами (колбэками),
// по одному для каждого типа уведомления, которое может доставить Observable.


// Возможные варианты передачи observer

// 1. Не со всеми методами:
const observer2 = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
};


//2. Если хотим передать в subscribe только колбэк метод next
//observable.subscribe(x => console.log(x));
