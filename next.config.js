const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'udemy',
                mongodb_password: 'No7qp7PUUfQfRUza',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'blog-db-dev'
            }
        }

        return {
            env: {
                mongodb_username: 'udemy',
                mongodb_password: 'No7qp7PUUfQfRUza',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'blog-db'
            }
        }
    }
};
