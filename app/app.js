//app.js
App({ 
   //初始化小程序
   onLaunch : function(){
       console.log('小程序开始了！！！！');
       this.getUserInfo();
   },
   onShow : function(){
       console.log('小程序准备显示了！！！！');
   },
   getUserInfo : function(res){
      var _this = this;
       wx.login({
          success : function(res){
             
              wx.getUserInfo({
                 success : function(res){
                      console.log('获取用户信息：'+JSON.stringify(res.userInfo));
                      _this.globalData.userName = res.userInfo.nickName;
                      _this.globalData.avatarurl = res.userInfo.avatarUrl;   
                    //   //存储用户名
                    //   this.setData({
                    //       userName : res.userInfo.nickName,
                    //       avatarurl : res.userInfo.avatarUrl
                    //   })
                 }
              })
          } 
       })              
   },
   globalData : {
       userName : null,
       avatarurl : null
   }   
})