const axios = require('axios');
const { printCGPA } = require('../Middlewares/printCGPA');
async function fetch(req,res) {
    const subcodes = [1068, 1076, 1077, 1078, 1079, 1084, 1085];
    const url = 'https://ums.lpu.in/lpuums/frmEngineeringMinorsPreference.aspx/AreaDilogBox';
    const data = {
        DdAreaId: '1-1068,2-1079,3-1076,4-1078,5-1085,6-1084,7-1085',
        RegdNo: '12314072'
    };
    let results = [];
    try {
        await Promise.all(subcodes.map(async (subcode) => {
            const subcodeData = { ...data, DdAreaId: `1-${subcode},2-1079,3-1076,4-1078,5-1085,6-1084,7-1085` };

            const response = await axios.post(url, subcodeData);
            const cgpaData = await printCGPA(response.data);
            results.push(cgpaData);
        }));
        return res.render('cgpa', { cgpaData: results });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

module.exports = {
    fetch,
};
