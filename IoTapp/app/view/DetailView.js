
Ext.define('IoT.view.DetailView', {
    xtype: 'DetailView',
    extend: 'Ext.NestedList',

    requires: [
        'Ext.data.TreeStore',
        'IoT.model.Device'
    ],

    config: {

        listConfig:{
        itemTpl:'<div id="{device}"> {icon} <!--<h2>{device}</h2>--!><p>{text}</p></div>'
            },

        store: {
            type: 'tree',
            id: 'NestedListStore',
            model: 'IoT.model.Device',
            proxy: {
                type: 'ajax',
                url: 'devices.json'
            }
        },
        listeners: {
        leafitemtap  : function(me, list, index, item) {

                var deviceType = list.getStore().getAt(index).data.device;
               
                if(deviceType == "CV"){

                    //fetch or create a/the editorPanel
                    var editorPanel = Ext.getCmp('editorPanelTHERM') || new IoT.view.EditorPanelTHERM();       
                    editorPanel.setRecord(list.getStore().getAt(index));
                            
                    if (!editorPanel.getParent()) {
                        Ext.Viewport.add(editorPanel);
                    }
                    editorPanel.show();
                }
                else{
                    //fetch or create a/the editorPanel
                    var editorPanel = Ext.getCmp('editorPanel') || new IoT.view.EditorPanel();       
                    editorPanel.setRecord(list.getStore().getAt(index));
                            
                    if (!editorPanel.getParent()) {
                        Ext.Viewport.add(editorPanel);
                    }
                    editorPanel.show();
                }
            
            }
        }
    }
});
