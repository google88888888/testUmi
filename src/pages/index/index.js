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
        const { dispatch } = this.props;
        await dispatch({
            type: 'index/onClickButton',
            payload: {
                id: '1478',
            },
        });
    };

    render() {
        let self = this;
        const { common, index, user } = this.props;
        console.log(index.show);
        return (
            <div>
                <div className={styles.title}>{index.show}</div>
                <div className={styles.title}>{user.show}</div>
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
            </div>
        );
    }
}
export default App;
