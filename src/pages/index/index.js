import React from 'react';
import styles from './index.less';

class App extends React.Component {
    render() {
        const {} = this.props;
        console.log('111111111');
        return (
            <div>
                <div className={styles.title}>index</div>
            </div>
        );
    }
}
export default App;
