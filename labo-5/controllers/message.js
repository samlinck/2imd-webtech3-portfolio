let get = (req, res) => {
    if (req.query.user) {
        let username = req.query.user;
        res.json({
            "status": "success",
            "message": "GETTING message for username: " + username
        });
    } else {
        res.json({
            "status": "success",
            "message": "GETTING all messages"
        });
    }
};

let post = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message for user Bojack"
    });
}

let getOne = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": {
            "id": id,
            "message": "GETTING message with ID " + id
    }
        
    });
}



let del = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": {
            "id": id,
            "message": "DELETING message with ID " + id
        }
    });
}

let put = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": {
            "id": id,
            "message": "UPDATING message with ID " + id
        }
    });
}

module.exports.get = get;
module.exports.post = post;
module.exports.del = del;
module.exports.put = put;
module.exports.getOne = getOne;