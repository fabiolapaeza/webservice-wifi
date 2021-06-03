

const environment = {
    git: {
        descripcion: 'GIT',
        port: '3000',
        mysql: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'wifi',
            waitForConnections: true,
            connectionLimit: 1000,
            connectTimeout: 60 * 60 * 1000,
            acquireTimeout: 60 * 60 * 1000,
            timeout: 60 * 60 * 1000,
        }
    }
}

module.exports = environment.git;