Ext.define('IoT.store.deviceStore',{
extend:'Ext.data.Store',
config:{
    model:'IoT.model.Device',
    autoLoad :true,
    proxy:{
                type:'jsonp',
                url:'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/tweakers/TQFb',
                reader:{
                    type:'json',
                    rootProperty:'responseData.feed.entries'
                }
            }
}
});