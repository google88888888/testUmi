import React from 'react';
import { connect } from 'dva';
import { Button, DatePicker } from 'antd';
import styles from './indexChildComponent1.less';

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
                indexChildComponent1: {
                    ...index.indexChildComponent1,
                    show: 'indexChildComponent1Of222',
                },
            },
        });
    };

    render() {
        let self = this;
        const { common, index, user } = this.props;
        return (
            <div>
                <div className={styles.title_div_indexChildComponent1}>
                    indexChildComponent1
                </div>
                <div className={styles.title_div_indexChildComponent1}>
                    {index.indexMain.show}
                </div>
                <div className={styles.title_div_indexChildComponent1}>
                    {index.indexChildComponent1.show}
                </div>
                <div className={styles.title_div_indexChildComponent1}>
                    {user.userMain.show}
                </div>
                <div className={styles.title_div_indexChildComponent1}>
                    {common.commonMain.show}
                </div>
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
            </div>
        );
    }
}
export default App;
