import React from 'react';
import { connect } from 'dva';
import { ConfigProvider, DatePicker } from 'antd';
import styles from './index.less';
import zhCN from 'antd/es/locale/zh_CN';

@connect(({ user }) => ({ user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        console.log(user.show);
        return (
            <ConfigProvider locale={zhCN}>
                <div>
                    <div className={styles.title}>{user.show}</div>
                    <div>
                        <DatePicker />
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}
export default App;
