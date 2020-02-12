const quares = require('../../models')


quares.users.getAllUsers((err, res) => {
    if (err) console.log(err);
    res.forEach(element => {
        console.log(element.user_id);
    });
});

