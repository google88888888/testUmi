import React from 'react';
import { connect } from 'dva';
import { Button, DatePicker } from 'antd';
import IndexChildComponent1 from './components/indexChildComponent1/index.js';
import CommonChildComponent1 from '@/libs/commonChildComponent1/index.js';
import styles from './index.less';

@connect(({ common, index, user }) => ({ common, index, user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickButton = async () => {
        const { dispatch, index } = this.props;
        await dispatch({
            type: 'index/getIstopOrderDetail',
            payload: {
                id: '1478',
            },
        });

        await dispatch({
            type: 'index/save',
            payload: {
                main: {
                    ...index.main,
                    show: 'indexShow222',
                },
            },
        });
    };

    render() {
        let self = this;
        const { common, index, user } = this.props;
        return (
            <div>
                <div className={styles.title}>{index.main.show}</div>
                <div className={styles.title}>{user.main.show}</div>
                <div className={styles.title}>{common.main.show}</div>
                <div>
                    <Button
                        type="primary"
                        onClick={self.onClickButton.bind(self)}
                    >
                        Primary
                    </Button>
                </div>
                <div>
                    <DatePicker />
                </div>

                <IndexChildComponent1 />

                <CommonChildComponent1 />
            </div>
        );
    }
}
export default App;
