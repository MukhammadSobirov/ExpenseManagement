module.exports = {
    IndexAPI: async (req, res) => {
        try {
            res.render('index', {
                title: 'Express'
            });
        } catch (err) {

            res.status(400).json({
                message: 'An error occured',
                error: err
            });
        }
    }

}