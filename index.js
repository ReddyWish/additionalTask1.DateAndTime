const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
];


function allowVisa(arr) {
    let today = new Date
    let filteredByCriminalRecord = arr.filter(item => item.criminalRecord === false)
    let filteredByPassportExpiration = filteredByCriminalRecord.filter(item => new Date(item.passportExpiration) > today)
    return filteredByPassportExpiration
}
console.log(allowVisa(peopleWithVisa))


