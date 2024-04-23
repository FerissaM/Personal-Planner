exports.day = function(req, res, next) {
    const { year, month, day } = req.params;
    // Render the view for the selected day
    res.render('dayDetails', { year, month, day });
};

exports.addItem = function(req, res, next) {
    const { year, month, day, item } = req.body;
    // Add item to the database for the specified day
    // Redirect back to the day's details page or any other desired page
    res.redirect(`/year/${year}/month/${month}/day/${day}`);
};
