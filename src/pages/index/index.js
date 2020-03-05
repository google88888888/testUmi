import React from 'react';
import { connect } from 'dva';
import { Button, DatePicker } from 'antd';
import styles from './index.less';

@connect(({ common, index, user }) => ({ common, index, user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { common, index, user } = this.props;
        console.log(index.show);
        return (
            <div>
                <div className={styles.title}>{index.show}</div>
                <div className={styles.title}>{user.show}</div>
                <div className={styles.title}>{common.show}</div>
                <div>
                    <Button type="primary">Primary</Button>
                </div>
                <div>
                    <DatePicker />
                </div>
            </div>
        );
    }
}
export default App;
