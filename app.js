
// const food = ['amir', 'tumir', 'apnir', 'shobar', 'alaker', 'vaai r', 'babir ' , 'alaker']

// const food3 =['alo', 'lao', 'shim', 'itaadi']
// food.short();

// console.log(food.reverse()); //array reverse Alfanewmatyck order
// console.log(food.sort()); //array sort Alfanewmaric order
// console.log(food.join( ' - ')); //array to string 
// console.log(food split); //string  to array
// // console.log(food2);

// console.log(food.splice(2, 4)); //array splice means cut
// console.log(food.slice(2)); //array splice means copy
// console.log(food.includes('babir ')); 

// console.log(Array.isArray(food)); 
// console.log(food.concat(food3)); 
 
/**
 * object taype data
 */
//for loop
// for (let i = 0; i < student.length; i++) {
//     console.log(`
//       Roll      : ${student[i].roll}
//       Name      : ${student[i].name}
//       Gender    : ${student[i].gender}
//       Location  : ${student[i].location}
//     `);
    
// }

// forEach loop

// student.forEach(data => {
//     console.log(`
//     Roll        : ${data.roll}
//     Name        : ${data.name}
//     Location    : ${data.location}
//     Gender      : ${data.gender}
//     `);
// });
 
student.map(data => {

    if (data.gender == 'Female') {
        console.log(`
        Roll        : ${data.roll}
        Name        : ${data.name}
        Location    : ${data.location}
        Gender      : ${data.gender}
        `);
    }
}); 


//for of loop


for ( data of student) {
    console.log(`
    Roll        : ${data.roll}
    Name        : ${data.name}
    Location    : ${data.location}
    Gender      : ${data.gender}
    `);
}

// for in loop

// For in loop given indexnumber

for (data in student) {
  
    console.log(student[data].name);

}