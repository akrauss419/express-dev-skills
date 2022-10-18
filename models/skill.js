const skills = [
    {id: 125223, skill: 'HTML', rank: 'second favorite'},
    {id: 127904, skill: 'CSS', rank: 'favorite'},
    {id: 139608, skill: 'JavaScript', rank: 'third favorite'}
];

module.exports = {
    getAll,
}

function getAll() {
    return skills;
}