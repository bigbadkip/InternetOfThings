var deviceStore = Ext.create("IoT.store.deviceStore"); // Instantie van de store

Ext.define('IoT.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
            'IoT.store.deviceStore',
            'Ext.dataview.List',
            'Ext.data.proxy.JsonP',
            'Ext.data.Store'
     ],
    config: {
        tabBarPosition: 'bottom',
        styleHtmlContent: true,
        scrollable: true,

        items: [
        {
                     docked: 'top',
                     xtype: 'titlebar',
                     title: 'The Internet Of Things'
        },
            {
                title: 'Locatie',
                iconCls: 'home',

                xtype:'list',
                itemTpl:'{title}',                 
                store: deviceStore,
                listeners : {
                         itemtap: function (list, index, item, record) {
                         // Show next view based on current record

                             var panel = Ext.create('Ext.Panel', {
                                floating: true,
                                centered: true,
                                //modal: true,
                                width: '80%',
                                height: '80%',
                                html: record.raw.content
                            });

                            panel.element.on('tap', function(){
                                this.hide();
                            });

                            Ext.Viewport.add(panel);
                               
                        }
                    }  
            },
            {
                title: 'All Devices',
                iconCls: 'action',

                    xtype:'DetailView'
            }
        ]
    }
});
