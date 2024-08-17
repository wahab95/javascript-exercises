const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(obj) {

    const ages_to_arr = obj.map((x)=>{

        if(Object.hasOwn(x,'yearOfDeath')) {

            return x['yearOfDeath'] - x['yearOfBirth'];

        }
        else {
            return 2024 - x['yearOfBirth']
        }
    })

    let max = ages_to_arr.reduce((x,y)=> {
        return Math.max(x,y);
    })


    

    
    const i = (ages_to_arr.indexOf(max));
    return people.at(i).name;
};
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
