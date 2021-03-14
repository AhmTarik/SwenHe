const { lookupTypesEnum } = require('../models/enum/productEnum')
const lookupSchema = require('../models/lookup');

const coffeMachineType = {
    COFFEE_MACHINE_LARGE: {
        id: 'COFFEE_MACHINE_LARGE',
        name: 'coffee machine large'
    },
    COFFEE_MACHINE_SMALL: {
        id: 'COFFEE_MACHINE_SMALL',
        name: 'coffee machine small'
    },
    ESPRESSO_MACHINE: {
        id: 'ESPRESSO_MACHINE',
        name: 'espresso machine'
    }
}

const waterLineCompatible = {
    true: {
        id: 'true',
        name: 'water line compatible'
    },
    false: {
        id: 'false',
        name: 'water line incompatible'
    },
}

const coffeePodsType = {
    COFFEE_POD_LARGE: {
        id: 'COFFEE_POD_LARGE',
        name: 'large coffee pod'
    },
    COFFEE_POD_SMALL: {
        id: 'COFFEE_POD_SMALL',
        name: 'small coffee pod'
    },
    ESPRESSO_POD: {
        id: 'ESPRESSO_POD',
        name: 'espresso pod'
    },
}

const coffeeFlavor = {
    COFFEE_FLAVOR_VANILLA: {
        id: 'COFFEE_FLAVOR_VANILLA',
        name: 'coffee flavor vanilla'
    },
    COFFEE_FLAVOR_CARAMEL: {
        id: 'COFFEE_FLAVOR_CARAMEL',
        name: 'coffee flavor caramel'
    },
    COFFEE_FLAVOR_PSL: {
        id: 'COFFEE_FLAVOR_PSL',
        name: 'coffee flavor psl'
    },
    COFFEE_FLAVOR_MOCHA: {
        id: 'COFFEE_FLAVOR_MOCHA',
        name: 'coffee flavor mocha'
    },
    COFFEE_FLAVOR_HAZELNUT: {
        id: 'COFFEE_FLAVOR_HAZELNUT',
        name: 'coffee flavor hazelnut'
    }
}

const coffePackSize = {
    1: {
        id: 1,
        name: '1 dozen (12)'
    },
    3: {
        id: 3,
        name: '3 dozen (36)'
    },
    5: {
        id: 5,
        name: '5 dozen (60)'
    },
    7: {
        id: 7,
        name: '7 dozen (84)'
    }
}

const fillLoookupData = (lookupArray, lookupTypeObject, lookupType) => {
    for (const key in lookupTypeObject) {
        let item = lookupTypeObject[key];
        if (!item)
            continue;
        lookupArray.push(new lookupSchema(item.id, item.name, lookupType));
    }
}

const fillData = () => {
    let lookups = [];
    fillLoookupData(lookups, coffeMachineType, lookupTypesEnum.coffeMachineType);
    fillLoookupData(lookups, waterLineCompatible, lookupTypesEnum.waterLineCompatible);
    fillLoookupData(lookups, coffeePodsType, lookupTypesEnum.coffePodsType);
    fillLoookupData(lookups, coffeeFlavor, lookupTypesEnum.coffeFlavor);
    fillLoookupData(lookups, coffePackSize, lookupTypesEnum.coffePackSize);
    return lookups;
}

module.exports = {
    coffeMachineType,
    waterLineCompatible,
    coffeePodsType,
    coffeeFlavor,
    coffePackSize,
    lookupsData: fillData()
}
