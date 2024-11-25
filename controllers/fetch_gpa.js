const axios = require('axios');

async function handlePostCgpa(req,res){
    const url = 'https://ums.lpu.in/lpuums/frmEngineeringMinorsPreference.aspx/AreaDilogBox';
    const data = {
        DdAreaId: '1-1079',
        RegdNo: `${req.body.RegdNo}`
    };
    console.log(req.body.RegdNo);
    axios.post(url, data)
        .then(response => {
            res.status(200).json({ gpa: response.data.d[0].SCGPA})
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}
function handlegetCgpa(req,res){
    res.render('fetch');
}
module.exports = {
    handlePostCgpa,
    handlegetCgpa,
};