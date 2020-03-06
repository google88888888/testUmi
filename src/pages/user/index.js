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
        return (
            <div>
                <div className={styles.title_div_userMain}>
                    {user.main.show}
                </div>
                <div>
                    <DatePicker />
                </div>
            </div>
        );
    }
}
export default App;
