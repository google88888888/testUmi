import React from 'react';
import { connect } from 'dva';
import { Button, DatePicker } from 'antd';
import IndexChildComponent1 from './components/indexChildComponent1/index.js';
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
                index: {
                    ...index.index,
                    show: 'indexShow222',
                },
            },
        });
    };

    render() {
        let self = this;
        const { common, index, user } = this.props;
        console.log(index.index.show);
        return (
            <div>
                <div className={styles.title}>{index.index.show}</div>
                <div className={styles.title}>{user.index.show}</div>
                <div className={styles.title}>{common.show}</div>
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
            </div>
        );
    }
}
export default App;
