import Home from '@/views/Home';
import Login from '@/views/Login';
import Reg from '@/views/Reg';
import Channel from '@/views/ChannelNews';
import Notfound from '@/views/NotFound';



export default{
    mode:'history',
    routes:[
        {
            path:"/",
            component: Home,
        },

        {
            path:"/login",
            component: Login,
        },

        {
            path:"/reg",
            component: Reg,
        },

        {
            path:"/channel/:cid",
            component: Channel,
        },

        {
            path:"*", //匹配所有路径
            component: Notfound,
        }
    ],
};