import React from 'react';
import { connect } from 'dva';
import { Button, DatePicker } from 'antd';
import styles from './index.less';

@connect(({ common, index, user }) => ({ common, index, user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickButton = async () => {
        const { dispatch, common } = this.props;
        await dispatch({
            type: 'index/getIstopOrderDetail',
            payload: {
                id: '1478',
            },
        });

        await dispatch({
            type: 'common/save',
            payload: {
                commonChildComponent1: {
                    ...common.commonChildComponent1,
                    show: 'commonChildComponent1Of222',
                },
            },
        });
    };

    render() {
        let self = this;
        const { common, index, user } = this.props;
        console.log(index.show);
        return (
            <div>
                <div className={styles.title}>commonChildComponent1</div>
                <div className={styles.title}>{common.index.show}</div>
                <div className={styles.title}>
                    {common.commonChildComponent1.show}
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
