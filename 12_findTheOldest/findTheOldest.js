const findTheOldest = function(people) {
    const oldest = people.reduce((acc, person) => 
    {
        if(!person.hasOwnProperty('yearOfDeath')){
            person.yearOfDeath = new Date().getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        if(acc.yearOfDeath - acc.yearOfBirth > age){
            return acc;
        } else {
            return person;
        }
    }, {})
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
