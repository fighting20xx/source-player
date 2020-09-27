import query from '../index';

export default {
	async add(row) {
		return await query(
			'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)',
			(err, rows) => {
				console.log(err, rows);
				return rows;
			}
		);
	},
	async delete(id) {
		return await query('DELETE FROM websites where id=6', (err, rows) => {
			return rows;
		});
	},
	async get(id) {
		return await query('SELECT FROM websites where id=6', (err, rows) => {
			return rows;
		});
	},
	async all() {
		return await query('SELECT * FROM test', (err, rows) => {
			console.log(err, rows);
			return rows;
		});
	},
	async clear() {
		return await query('SELECT FROM websites where id=6', (err, rows) => {
			return rows;
		});
	},
};
