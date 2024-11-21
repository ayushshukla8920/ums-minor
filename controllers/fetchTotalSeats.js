const axios = require('axios');
const { createSeatsJson } = require('../Middlewares/printSeats');
async function fetchSeats(req,res){
    const url = 'https://ums.lpu.in/lpuums/frmEngineeringMinorsPreference.aspx/grdDetailListofSeats';
    const data = {
        RegNo: `12314072`
    };
    axios.post(url, data)
        .then(response => {
            createSeatsJson(response.data)
            .then(result=>{
                return res.render('seats', { seatsData: result });
            })
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}
module.exports = {
    fetchSeats,
}