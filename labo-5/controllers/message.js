let get = (req, res) => {
    res.json({
        "status": "success",
        "message": "GET messages"
    });
}

let post = (req, res) => {
    res.json({
        "status": "success",
        "message": "POST message"
    });
}

module.exports.get = get;
module.exports.post = post;