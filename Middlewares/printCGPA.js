async function printCGPA(data) {
    const body = data.d[0];
    const result = {
        name: body.Name,
        above_8: body.cgpa4,
        between_6_and_8: body.cgpa3
    };
    return result;
}
module.exports = {
    printCGPA,
};
