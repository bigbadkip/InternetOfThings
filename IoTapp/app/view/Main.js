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
                title: 'Login',
                iconCls: 'home',
                xtype: 'LoginView'
                // items: {
                //     html: "The Internet of Things (IoT) is the network of physical objects or 'things' embedded with electronics, software, sensors and connectivity to enable it to achieve greater value and service by exchanging data with the manufacturer, operator and/or other connected devices. Each thing is uniquely identifiable through its embedded computing system but is able to interoperate within the existing Internet infrastructure."
                // }
        },
        {
                title: 'Locaties',
                iconCls: 'action',
                xtype:'DetailView'
        }
        ]
    }
});
