import React from 'react';
import { connect } from 'dva';
import { ConfigProvider, Button, DatePicker } from 'antd';
import styles from './index.less';
import zhCN from 'antd/es/locale/zh_CN';

@connect(({ index, user }) => ({ index, user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, user } = this.props;
        console.log(index.show);
        return (
            <ConfigProvider locale={zhCN}>
                <div>
                    <div className={styles.title}>{index.show}</div>
                    <div className={styles.title}>{user.show}</div>
                    <div>
                        <Button type="primary">Primary</Button>
                    </div>
                    <div>
                        <DatePicker />
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}
export default App;
