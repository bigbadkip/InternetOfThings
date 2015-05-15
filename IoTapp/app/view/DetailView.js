
Ext.define('IoT.view.DetailView', {
    xtype: 'DetailView',
    extend: 'Ext.NestedList',

    requires: [
        'Ext.data.TreeStore',
        'IoT.model.Device'
    ],

    config: {

        listConfig:{
        itemTpl:'<div><img width="50" height="50" src="icons/{device}.png" border="1px solid blue"/>{text}</div>'
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

                var editorPanel;
                var deviceType = list.getStore().getAt(index).data.device;
               
                if(deviceType == "CV"){
                    editorPanel = Ext.getCmp('editorPanelCV') || new IoT.view.EditorPanelCV();       
                }
                if(deviceType == "TV" || deviceType == "RADIO"){
                    editorPanel = Ext.getCmp('editorPanelTV') || new IoT.view.EditorPanelTV();                                               
                }
                if(deviceType == "BEAMER"){
                    editorPanel = Ext.getCmp('editorPanelBEAMER') || new IoT.view.EditorPanelBEAMER();                                               
                }

                editorPanel.setRecord(list.getStore().getAt(index));
                if (!editorPanel.getParent()) {
                        Ext.Viewport.add(editorPanel);
                    }
                editorPanel.show();
            }
        }
    }
});
