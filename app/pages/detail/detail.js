var app = getApp();

Page({
    onLoad : function(){
        //获取当前用户头像图片
        this.setData({
            userName : app.globalData.userName,
            avatarUrl : app.globalData.avatarurl
        })
    },
    data : {
        currentId : null,
        modalHidden: true,
        item : {
            time : "2016-10-25 16:42",
            anchor : wx.getStorageSync('AVATARURL'), 
            name : 'Tony',
            context : '我们提供了一种新的开放能力',
            pic : [
                '../../img/default.png',
                '../../img/default.png'
            ],
            myself : false,
            ctrlShow : false 
        }
    },
    ctrlHidden : function(){

    },
    ctrlShow : function(event){
        var item = this.data.item;
        item.ctrlShow = !item.ctrlShow;
        this.setData({
            item : item
        })
    }
})