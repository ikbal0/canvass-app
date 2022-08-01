export default function handler(req, res) {
    res.setPreviewData({user: 'Ikbal'})
    res.redirect(req.query.redirect)
}