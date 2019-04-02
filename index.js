/**
 * 
 * 
 * Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together.
 * 
 */

function timeAdder(value1, label1, value2, label2) {
    const val1 = value1 >= 0 ? value1 : false;
    const val2 = value2 >= 0 ? value2 : false; 
    const labels = [
       "seconds",
       "minutes",
       "hours",
       "days",
       "second",
       "minute",
       "hour",
       "day"
    ];
    const lab1 = labels.includes(label1);
    const lab2 = labels.includes(label2);

    switch (true) {
        case value1 > 1 && label1 == 'minute':
            return 'Verify if parameter is singular or plural';
        case value1 > 1 && label1 == 'hour':
            return 'Verify if parameter is singular or plural';
        case value1 == 1 && label1 == 'hours':
            return 'Verify if parameter is singular or plural'; 
        case value1 == 1 && label1 == 'minutes':
            return 'Verify if parameter is singular or plural';
        case value2 > 1 && label2 == 'minute':
            return 'Verify if parameter is singular or plural';
        case value2 > 1 && label2 == 'hour':
            return 'Verify if parameter is singular or plural';
        case value2 == 1 && label2 == 'hours':
            return 'Verify if parameter is singular or plural'; 
        case value2 == 1 && label2 == 'minutes':
            return 'Verify if parameter is singular or plural';
        case value1 == 1 && label1 == 'seconds':
            return 'Verify if parameter is singular or plural';
        case value1 > 1 && label1 == 'second':
            return 'Verify if parameter is singular or plural';      
    }

    if(!val1 | !val2 ) {
        return 'The value should be a positive number';
    }
    if( !lab1 | !lab2 ){
        return 'The value should be seconds, minutes, hours, days, second, minute, hour, day';
    }
    
    let result;
    let resArray = [];

    if(label1 == label2 ) {
        result = value1 + value2;
        resArray = [result, label1];
        return resArray;

    }
    if(label1 == 'hours' || label1 == 'hour' &&  label2 == 'minutes'  || label1 == 'minute'  ) {
        result = value1 * 60 + value2;
        resArray = [result, label2];
        return resArray;
    }
    if(label1 == 'hour' || label1 == 'hours' &&  label2 == 'hours' || label1 == 'hours'  ) {
        result = value1 * 60 + value2;
        resArray = [result, label1];
        return resArray;
    }

    if(label1 == 'minute' || label1 == 'minutes' &&  label2 == 'hour' || label2 == 'hours' ) {
        result = value2 * 60 + value1;
        resArray = [result, label2];
        return resArray;
    }
    if(label1 == 'second' || label1 == 'seconds' &&  label2 == 'minute' || label2 == 'minutes' ) {
        result = value1 * 60 + value2;
        resArray = [result, label1];
        return resArray;
    }1
    if(label1 == 'minute' || label1 == 'minutes' &&  label2 == 'second' || label2 == 'seconds' ) {
        result = value2 * 60 + value1;
        resArray = [result, label2];
        return resArray;
    }
           
}

const timeAdd = timeAdder(1,'seconds', 3, 'minutes');


console.log(timeAdd);