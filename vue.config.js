module.exports = {
    // Vue的配置
    devServer:{
        //针对开发服务器的配置
        proxy:{
            "/api":{ //当请求路径以/api开头时，开发服务器需要代理到http://study.yuanjin.tech
                target:"http://study.yuanjin.tech",
            },
        },
    },
}