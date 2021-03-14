const { lookupTypesEnum } = require('../models/enum/productEnum')
const coffeeProductSchema = require('../models/coffeeProduct');
const { coffeMachineType, waterLineCompatible, coffeePodsType, coffeeFlavor, coffePackSize } = require('../DB/lookupsData');

const fillData = () => {
    let skuList = [];
    //fill coffee machine type
    skuList.push(
        new coffeeProductSchema(
            'CM001',
            coffeMachineType.COFFEE_MACHINE_SMALL.id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CM002',
            coffeMachineType.COFFEE_MACHINE_SMALL.id
        ));
    skuList.push(
        new coffeeProductSchema(
            'CM003',
            coffeMachineType.COFFEE_MACHINE_SMALL.id,
            waterLineCompatible.true.id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CM101',
            coffeMachineType.COFFEE_MACHINE_LARGE.id,
        ));
    skuList.push(
        new coffeeProductSchema(
            'CM102',
            coffeMachineType.COFFEE_MACHINE_LARGE.id,
            waterLineCompatible.true.id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CM103',
            coffeMachineType.COFFEE_MACHINE_LARGE.id,
            waterLineCompatible.true.id
        ));

    skuList.push(
        new coffeeProductSchema(
            'EM001',
            coffeMachineType.ESPRESSO_MACHINE.id,
        ));
    skuList.push(
        new coffeeProductSchema(
            'EM002',
            coffeMachineType.ESPRESSO_MACHINE.id,
        ));
    skuList.push(
        new coffeeProductSchema(
            'EM003',
            coffeMachineType.ESPRESSO_MACHINE.id,
            waterLineCompatible.true.id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP001',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP003',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP011',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP013',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP021',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_PSL.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP023',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_PSL.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP031',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_MOCHA.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP033',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_MOCHA.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP041',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_HAZELNUT.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP043',
            coffeePodsType.COFFEE_POD_SMALL.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_HAZELNUT.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP101',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
            coffePackSize[1].id
        ));


    skuList.push(
        new coffeeProductSchema(
            'CP103',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
            coffePackSize[3].id
        ));


    skuList.push(
        new coffeeProductSchema(
            'CP111',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP113',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP121',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_PSL.id.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP121',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_PSL.id.id,
            coffePackSize[1].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP123',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_PSL.id.id,
            coffePackSize[3].id
        ));

    skuList.push(
        new coffeeProductSchema(
            'CP131',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_MOCHA.id,
            coffePackSize[1].id
        ));
    skuList.push(
        new coffeeProductSchema(
            'CP133',
            coffeePodsType.COFFEE_POD_LARGE.id,
            null,
            coffeeFlavor.COFFEE_FLAVOR_MOCHA.id,
            coffePackSize[3].id
        ));

        skuList.push(
            new coffeeProductSchema(
                'CP141',
                coffeePodsType.COFFEE_POD_LARGE.id,
                null,
                coffeeFlavor.COFFEE_FLAVOR_HAZELNUT.id,
                coffePackSize[1].id
            ));

            skuList.push(
                new coffeeProductSchema(
                    'CP143',
                    coffeePodsType.COFFEE_POD_LARGE.id,
                    null,
                    coffeeFlavor.COFFEE_FLAVOR_HAZELNUT.id,
                    coffePackSize[3].id
                ));

                skuList.push(
                    new coffeeProductSchema(
                        'EP003',
                        coffeePodsType.ESPRESSO_POD.id,
                        null,
                        coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
                        coffePackSize[3].id
                    ));
                    skuList.push(
                        new coffeeProductSchema(
                            'EP005',
                            coffeePodsType.ESPRESSO_POD.id,
                            null,
                            coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
                            coffePackSize[5].id
                        ));
                        skuList.push(
                            new coffeeProductSchema(
                                'EP007',
                                coffeePodsType.ESPRESSO_POD.id,
                                null,
                                coffeeFlavor.COFFEE_FLAVOR_VANILLA.id,
                                coffePackSize[7].id
                            ));

                            skuList.push(
                                new coffeeProductSchema(
                                    'EP013',
                                    coffeePodsType.ESPRESSO_POD.id,
                                    null,
                                    coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
                                    coffePackSize[3].id
                                ));skuList.push(
                                    new coffeeProductSchema(
                                        'EP015',
                                        coffeePodsType.ESPRESSO_POD.id,
                                        null,
                                        coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
                                        coffePackSize[5].id
                                    ));skuList.push(
                                        new coffeeProductSchema(
                                            'EP017',
                                            coffeePodsType.ESPRESSO_POD.id,
                                            null,
                                            coffeeFlavor.COFFEE_FLAVOR_CARAMEL.id,
                                            coffePackSize[7].id
                                        ));


    return skuList;
}


module.exports.skuListData = fillData();