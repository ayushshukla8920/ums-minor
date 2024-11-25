const students = require('../Rank_Data/final_result.json')

async function fetchRank(req,res){
    res.render('rank', { students, query: '' });
}


async function searchRank(req,res){
    const query = req.body.regNo;
    const filteredStudents = students.filter(student => student.RegNo.includes(query));
    res.render('rank', { students: filteredStudents, query });
}

module.exports = {
    fetchRank,
    searchRank,
}