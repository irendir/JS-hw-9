// 1. создать класс (функцию-конструктор) Auto. принимает
// - марка (String)
// - модель (String)
// - год выпуска (Number)
// - vin-код из 16 символов (String)
function Auto() {
    this.marka = marka,
    this.model = model,
    this.year = year,
    this.vinCode = vinCode
}
// по методам в прототип записать:
// - log(). возвращает марку + модель + год выпуска в виде строки
// - checkVin(). возвращает true, если в vin-коде 16 символов, иначе false
Auto.prototype.log = function() {
    return [this.marka, this.model, this.year]
}
Auto.prototype.checkVin = function() {
    if (this.vinCode.length == 16) {
        return true
    }
    return false;
}
// 2. создать класс (ф-ю конструктор) Auto_Fuel().
// принимает те же аргументы +
// - объем двигателя (String)
// - расход в литрах (Number)
function Auto_Fuel() {
    this.marka = marka,
    this.model = model,
    this.year = year,
    this.vinCode = vinCode,
    this.volume = volume,
    this.consumption = consumption
}
Auto_Fuel.prototype = Object.create(Auto.prototype)

// является подклассом класса Auto (прототип Auto_Fuel подвязан к Auto aки Rabbit к Animal на лекции)
// собственные методы:
// - showFuelConsumption(). возвращает строку объем двигателя + расход
Auto_Fuel.prototype.showFuelConsumption = function() {
    return [this.volume, this.consumption]
}

// 3. создать класс Auto_Electric().
// принимает те же аргументы +
// - емкость батареи (String)
function Auto_Electric(marka, model, year, vinCode, capacity) {
    this.marka = marka,
    this.model = model,
    this.year = year,
    this.vinCode = vinCode,
    this.capacity = capacity
}
Auto_Electric.prototype = Object.create(Auto.prototype)

// является как и Auto_Fuel подклассом класса Auto
// собственные методы:
// - showBatteryConfig(). возвращает строку емкость батареи.
Auto_Electric.prototype.showBatteryConfig = function() {
    return this.capacity
}

let tesla = new Auto_Electric('Tesla', 'Model X', 2020, 'AF12124AEGJ32413', '100 кВт/ч')
// пример:
// let tesla = new Auto_Electric(’Tesla’, ‘Model X’, 2020, ‘AF12124AEGJ32413’, ‘100 кВт/ч’)

// tesla.log() // ‘Tesla Model X 2020’
// tesla.checkVin() // true
// tesla.showBatteryConfig() // ‘100 кВт/ч’

