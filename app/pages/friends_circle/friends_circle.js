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
        list : [
            {
                anchor : wx.getStorageSync('AVATARURL'), 
                name : 'Tony',
                context : '我们提供了一种新的开放能力',
                pic : [
                    '../../img/default.png',
                    '../../img/default.png'
                ],
                myself : true,
                ctrlShow : false 
            },
            {
                anchor : '../../img/icon-qun.png',  
                name : 'jevon',
                context : '二十多年前，中国的国有企业和政府机关的工作大都很稳定，只有你不犯大错误，就可以作为“单位人”一直工作下去。1992年随着市场经济体制的确立，这种事实上的“终身雇佣制”受到了来自外企和民企的冲击',
                pic : [
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png',
                    '../../img/default.png'
                ],
                ctrlShow : false                  
            },
            {
                anchor : '../../img/icon-qun.png',  
                name : 'helen',
                context : '随着互联网金融的兴起，相应的牌照是否会逐步放开？互联网金融牌照又有何意义？',
                pic : [
                    '../../img/default.png'
                ],
                ctrlShow : false                  
            }
        ]
    },
    viewTurn : function(){
        wx.navigateTo({
           url : '../detail/detail'     
        });
    },
    ctrlHidden : function(){
        var list = this.data.list;
        for(var i=0;i<list.length;i++){
            list[i].ctrlShow = false;
        }
        this.setData({
            list : list
        })
    },
    ctrlShow : function(event){
        var currentId = event.currentTarget.id,
            list = this.data.list;   
            
        for(var i=0;i<list.length;i++){
            if(currentId != i){
                list[i].ctrlShow = false;
            }
        }  

        list[currentId].ctrlShow = !list[currentId].ctrlShow;
        
        this.setData({
            list : list
        })   
    },
    modalTap : function(){
        this.setData({
            modalHidden : false
        })
    },
    modalChange : function(){
        this.setData({
            modalHidden : true
        })
    },
    delteItem : function(event){
       var currentId = event.currentTarget.id,
           list = this.data.list;
       list.splice(currentId,1);
       this.setData({
           list : list,
           modalHidden : true
       })    
    }
})