import React from 'react';
import { connect } from 'dva'
import styles from './index.less';

@connect(({user}) => ({user}))
class App extends React.Component {
    constructor(props) {
        super(props);
    
    }


    render() {
        const {show} = this.props;
        console.log(show);
        return (
            <div>
                <div className={styles.title}>{show}</div>
            </div>
        );
    }
}
export default App;
