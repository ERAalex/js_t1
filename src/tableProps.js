const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
}


/**
 * @param {Object} someObject The object to sort its values
 * @param {Array} sortingList The array with sort fields
 */
function orderByProps (someObject, sortingList) {
    sortedProperties = []
    notIndicate = []

    for (i = 0; i < sortingList.length; i++) {

        for (const attributeHeroe in someObject) {
            if (someObject.hasOwnProperty(attributeHeroe) && sortingList[i] === attributeHeroe){
                sortedProperties.push({
                    key:   attributeHeroe,
                    value: someObject[attributeHeroe]
                })} 
            else {
                if (!notIndicate.includes(attributeHeroe) && !sortingList.includes(attributeHeroe)){
                    notIndicate.push(attributeHeroe)
                }
            }
    }}
    prepareArray = notIndicate.sort()

    for (i = 0; i < prepareArray.length; i++) {
        sortedProperties.push({
            key: prepareArray[i],
            value: someObject[prepareArray[i]]
        })} 

    return sortedProperties
}


console.log(orderByProps(obj, ["name", "level"]))