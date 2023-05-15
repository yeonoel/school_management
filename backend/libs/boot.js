import http from 'http';

const  startServer = (api) => {
    const server = http.createServer(api);
    const port = process.env.port || 3001;
    api.listen(port, () => {
        console.log('This application is running on adress:' + server.address() + ' port:' + port);
        
    })
}

export default startServer 