const skills = [
    {id: 125223, skill: 'HTML', status: 'extra practice'},
    {id: 127904, skill: 'CSS', status: 'extra practice'},
    {id: 139608, skill: 'JavaScript', status: 'a ton of extra practice'}
];

module.exports = {
    getAll
}

function getAll() {
    return skills;
}