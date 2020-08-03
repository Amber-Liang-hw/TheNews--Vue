<template>
    <Center>
        <form action="" class="reg-container" @submit.prevent="handleSubmit">
            <div class="form-item">
                <div class="input"><label>账号：</label><input v-model="userInfo.loginId" type="text" @input="validateEmpty('loginId','账号不能为空')"></div>
            </div>
                <FromError :msg = "error.loginId"></FromError>
            

            <div class="form-item">
                <div class="input"><label>密码：</label><input v-model="userInfo.loginPwd" type="password" autocomplete="new-password" @input="validateEmpty('loginPwd','密码不能为空')"></div>
            </div>
                <FromError :msg = "error.loginPwd"></FromError>
            

            <div class="form-item">
                <div class="input"><label>重复密码：</label><input v-model="userInfo.pwdAgain" type="password" autocomplete="new-password" @input="validatePwdAgain"></div>
            </div>
                <FromError :msg = "error.pwdAgain"></FromError>
            

            <div class="form-item">
                <div class="input"><label>用户名：</label><input v-model="userInfo.nickName" type="text"></div>
            </div>
                <FromError :msg = "error.nickName"></FromError>
            

            <div class="form-item">
                <div class="input"><label></label><button>注册</button></div>
                <!-- <FromError :msg = "error.serve"></FromError> -->
            </div>
        </form>
    </Center> 
</template>

<script>
import Center from '../components/Center';
import FromError from '../components/FromError';


export default {
    components:{
        Center,
        FromError,
    },
    data(){
        return{
            userInfo: {
                loginId:"",
                loginPwd:"",
                pwdAgain:"",
                nickName:"",
            },
            error:{
                loginId:"",
                loginPwd:"",
                pwdAgain:"",
                nickName:"",
                server:"",
            }
        }
    },

    methods:{

        validateEmpty(field,msg){
            if(this.userInfo[field]){
                this.error[field] = "";
                return true;
            }else{
                this.error[field] = msg;
                return false;
            }
        },

        validatePwdAgain(){
            var result = this.validateEmpty("pwdAgain","重复密码不能为空");
            if(result){
                if(this.userInfo.loginPwd !== this.userInfo.pwdAgain){
                    this.error.pwdAgain = "两次密码不一致";
                    return false;
                }
                return true;
            }
            return false;
        },
        
        async handleSubmit(){
            if(this.validateEmpty('loginId','账号不能为空') && this.validateEmpty('loginPwd','密码不能为空') && this.validatePwdAgain() && this.validateEmpty('nickName','请输入用户名')){
                alert("注册成功！");
                this.$router.push('/Login');
            }
        }
    }
}
</script>

<style scoped>
.reg-container{
    width:300px;
    
}

.form-item{
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    margin: 0px;
    justify-content: flex-start;
}

.form-item input{
    width: 200px;
    border-radius: 5px;
    outline-style: none ;
    border: 0px;
    line-height: 30px;
}


.form-item label{    
    font-size: 15px;
    width: 80px;
    text-align: right;
    line-height: 35px;
}



button{
    margin: 15px;
    width: 180px; /* 宽度 */
	height: 40px; /* 高度 */
	border-width: 0px; /* 边框宽度 */
	border-radius: 3px; /* 边框半径 */
	background: #d38135; /* 背景颜色 */
	cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei; /* 设置字体 */
	color: white; /* 字体颜色 */
	font-size: 17px; /* 字体大小 */


    
}

</style>