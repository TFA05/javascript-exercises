const findTheOldest = function(people) {
    return people
                .map(person => {
                    if (!person.yearOfDeath)
                        return {name: person.name, life: new Date().getFullYear() - person.yearOfBirth};
                    else
                        return {name: person.name, life: person.yearOfDeath - person.yearOfBirth};
                })
                .sort((Aperson, Bperson) => Bperson.life - Aperson.life)
                [0];
        
};

//moze i sa reduce

// Do not edit below this line
module.exports = findTheOldest;
