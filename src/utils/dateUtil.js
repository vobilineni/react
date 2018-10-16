// import moment from 'moment';
// // export function formatDateToyyyymmdd(inputDate) {
// //     return inputDate === null ? '' : inputDate.format('YYYY-MM-DD');
// // }
// //
// // export function isOutsideRange(inputDate) {
// //     // it's important to use UTC time, part of requirement
// //     return inputDate > new Date();
// // }
//
// export function isAsOfDateValid(asOfDate) {
//
//     if (asOfDate === null) {
//         return false
//     }
//     const d = new Date(asOfDate);
//     if (Object.prototype.toString.call(d) === '[object Date]') {
//         // it is a date
//         if (Number.isNaN(d.getTime())) { // d.valueOf() could also work
//             //     // date is not valid
//             return false;
//         } else {
//             //     // date is valid
//             if (asOfDate > moment()) {
//                 return false;
//             }
//             return true;
//         }
//     } else {
//         //     // not a date
//         return false;
//     }
// }
