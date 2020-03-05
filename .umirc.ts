import { defineConfig } from 'umi';
console.log(`---- 正在构建 ---- ${process.env.API_HOST} 环境 ----`);
export default defineConfig({
    //dva: {},
    //antd:{}
    define: {
        API_HOST: process.env.API_HOST, // 接口环境
    },
});
