const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    let oldestAge, currentAge;
    oldestAge =
      oldest.yearOfDeath == null
        ? 2024 - oldest.yearOfBirth
        : oldest.yearOfDeath - oldest.yearOfBirth;

    currentAge =
      current.yearOfDeath == null
        ? 2024 - current.yearOfBirth
        : current.yearOfDeath - current.yearOfBirth;

    return oldestAge > currentAge? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
