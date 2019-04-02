let get = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING all messages"
    });
}

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

let forUser = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages for user bojack"
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
            "message": "UPDATING message with ID" + id
        }
    });
}

module.exports.get = get;
module.exports.post = post;
module.exports.del = del;
module.exports.put = put;

module.exports.getOne = getOne;
module.exports.forUser = forUser;