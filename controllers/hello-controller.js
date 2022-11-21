const HelloController = (app) => {

app.get('/hello', (req, res) => {res.send('Hello World!')})
    app.get('/', (req, res) => {res.send('Welcome to Web Dev')})
app.get('/goodlife',(req,res) => {res.send('Life is good :)')})

app.get('/add/:a/:b',(req,res) => {
    const A = parseInt(req.params.a)
    const B = parseInt(req.params['b'])
    const C = A + B
    res.send(`${A} + ${B} = ${C}`)
})


}
export default HelloController;