import React from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';

@connect(({ user }) => ({ user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        console.log(user.show);
        return (
            <div>
                <div className={styles.title}>{user.show}</div>
                <div>
                    <DatePicker />
                </div>
            </div>
        );
    }
}
export default App;
