const skills = [
    {id: 125223, skill: 'HTML', status: 'extra practice'},
    {id: 127904, skill: 'CSS', status: 'extra practice'},
    {id: 139608, skill: 'JavaScript', status: 'a ton of extra practice'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}