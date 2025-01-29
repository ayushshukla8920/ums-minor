const students = require('../Rank_Data/Batch 2024/final_result.json')

async function fetchRank(req,res){
    res.render('rank-2024', { students, query: '' });
}


async function searchRank(req,res){
    const query = req.body.regNo;
    const filteredStudents = students.filter(student => student.RegNo.includes(query));
    res.render('rank-2023', { students: filteredStudents, query });
}

module.exports = {
    fetchRank,
    searchRank,
}