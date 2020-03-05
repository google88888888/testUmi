import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ConfigProvider locale={zhCN}>{this.props.children}</ConfigProvider>
        );
    }
}
export default App;
