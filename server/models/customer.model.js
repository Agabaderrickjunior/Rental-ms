const pool = require('../database');

const Customer = {
    getAllCustomers: (callback) => {
        pool.query('SELECT * FROM customers', (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    getCustomerById: (id, callback) => {
        pool.query('SELECT * FROM customers WHERE id = ?', [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results[0]);
        });
    },

    addCustomer: (data, callback) => {
        pool.query('INSERT INTO customers SET ?', data, (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    updateCustomer: (id, data, callback) => {
        pool.query('UPDATE customers SET ? WHERE id = ?', [data, id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    deleteCustomer: (id, callback) => {
        pool.query('DELETE FROM customers WHERE id = ?', [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    }
};

module.exports = Customer;