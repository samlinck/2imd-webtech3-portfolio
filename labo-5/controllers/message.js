let get = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING all messages"
    });
}

let post = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message for user Pickachu"
    });
}

let id = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING message with ID 21"
    });
}

module.exports.get = get;
module.exports.post = post;
module.exports.get = id;