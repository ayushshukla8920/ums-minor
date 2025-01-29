const data = require('./RegNo.json');
const express = require('express');
const axios = require('axios');
const app = express();
const fs = require('fs');

app.use(express.json());

async function fetchSCGPA(regNo) {
    const url = 'https://ums.lpu.in/lpuums/frmEngineeringMinorsPreference.aspx/AreaDilogBox';
    const payload = {
        DdAreaId: '1-1079',
        RegdNo: `${regNo.Regno}`
    };
    try {
        const response = await axios.post(url, payload,{headers: { 'Content-Type': 'application/json' }});
        return { RegdNo: regNo.Regno, SCGPA: response.data.d[0].SCGPA };
    } catch (error) {
        return { RegdNo: regNo.Regno, SCGPA: null };
    }
}

async function looper(req, res) {
    const results = [];

    for (let i = 0; i < data.length; i++) {
        const regNo = data[i];
        const result = await fetchSCGPA(regNo);
        console.log(result);
        const csv = `${result.RegdNo},${result.SCGPA}\n`;
        const outputFilePath = 'results_sample.csv'; 
        fs.appendFileSync(outputFilePath, csv);
        results.push(result);
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    res.json(results);
}

app.get('/', looper);

app.listen(3330, () => {
    console.log('Server running on http://localhost:3330');
});
