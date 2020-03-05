import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ index, user }) => ({ index, user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, user } = this.props;
        console.log(index.show);
        return (
            <div>
                <div className={styles.title}>{index.show}</div>
                <div className={styles.title}>{user.show}</div>
            </div>
        );
    }
}
export default App;
