 function intervieQuestrion(job) {
     if (job === 'designer') {
         return function(name) {
             console.log(`Привет ${name},расскажи что такое UX дизайн?`);
         }
     } else if (job === 'teacher') {
         return function(name) {
             console.log(`Привет ${name},расскажи какой предмет ты преподаешь?`);
         }
     } else {
         return function(name) {
             console.log(`Привет ${name},расскажи чем ты занимаешься?`);
         }
     }
 }

 let designerQuestion = intervieQuestrion('designer');
 designerQuestion('petia');

 intervieQuestrion('teacher')('Вася');