import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ user }) => ({ user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        console.log(user);
        return (
            <div>
                <div className={styles.title}>{user.show}</div>
            </div>
        );
    }
}
export default App;
