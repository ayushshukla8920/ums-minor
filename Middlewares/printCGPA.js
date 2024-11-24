async function printCGPA(data) {
    const body = data.d[0];
    const result = {
        name: body.Name,
        above_8: body.cgpa4,
        between_6_and_8: body.cgpa3,
        between_4_and_6: body.cgpa2,
        below_4: body.cgpa1
    };
    return result;
}
module.exports = {
    printCGPA,
};
