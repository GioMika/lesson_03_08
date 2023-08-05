let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
  ]
  
  // Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
  // let result_1 = goods.filter(value => value.id % 2 == 0)
  // console.log(result_1);
  
  
  // Посчитайте сумму всех товаров, учитывая их количество
  
  // let result_2=  goods.reduce((acum,value) => acum + (value.price * value.count),0)
  
  // console.log(result_2);
  

  // Найдите значение элемента массива (продукта), цена которого будет кратна 5
  
  // let result_3 = goods.find(value => value.price % 5 == 0)
  // console.log(result_3);
  
  
  // Найдите индекс элемента, count которого будет больше 11
  
  // let result_4 = goods.findIndex(index => index.count > 11)
  // console.log(result_4);
  
  
  // Посчитайте количество элементов, count которых является нечетным числом
  
  // let resul_5 = goods.reduce((acum,value) => acum + (value.count % 2 !==0),0)
  
  // console.log(resul_5);
  

  // Посчитайте количество элементов, имя которых начинается на “Т”
  
  // let resul_6 = goods.reduce((acum,value) => acum + (value.title[0]  === 'Т' ),0)
  
  // console.log(resul_6);
  
  
  // Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены) 
  
  // let result_7 = goods.map(value => value.price * 65 / 100)
  // console.log(result_7);
  
  // Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
  
  // let result_8 = goods.map(value => ({...value,count: 0}))
  
  // console.log(result_8);
  
  //  необходимо отсортировать массив по сво-ву title
  
  // let result_9 = goods.sort((curent,next) => {
  //   if(curent.title > next.title)return 1
  //   if(curent.title < next.title) return -1
  //   if(curent.title == next.title) return 0
  // })
  // console.log(result_9);