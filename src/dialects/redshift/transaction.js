
import Promise from 'bluebird';
import Transaction from '../../transaction';
import { getLogger } from '../../logger';

export default class Redshift_Transaction extends Transaction {
  savepoint(conn) {
    getLogger().warn('Redshift does not support savepoints.');
    return Promise.resolve()
  }

  release(conn, value) {
    getLogger().warn('Redshift does not support savepoints.');
    return Promise.resolve()
  }

  rollbackTo(conn, error) {
    getLogger().warn('Redshift does not support savepoints.');
    return Promise.resolve()
  }
}
