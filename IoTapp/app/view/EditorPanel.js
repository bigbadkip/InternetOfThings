
 // This is used by the NestedList to allow editing of an item in the Store
 
Ext.define('IoT.view.EditorPanel', {
    extend: 'Ext.form.Panel',
    id: 'editorPanel',
    requires: 'IoT.view.ItemsDefault',
    config: {
        modal: true,
        hideOnMaskTap: false,
        centered: true,
        width: '90%',
        scrollable: null,
        items: [{
            xtype: 'textfield',
            hidden: false,
            name: 'device',
            id: 'device'
        },



            //DEFAULT
        {
                    xtype: 'textfield',
                    name: 'text',
                    label: 'Name',
                    readOnly: true
        },
        {
                    xtype: 'spinnerfield',
                    label: 'Volume',
                    defaultValue: 26,
                    minValue: 0,
                    maxValue: 100,
                    increment: 1,
                    cycle: false                
        },
        {
                    xtype: 'spinnerfield',
                    label: 'Zender',
                    minValue: 0,
                    maxValue: 100,
                    increment: 1,
                    cycle: false
        },
        {
                    xtype: 'togglefield',
                    name: 'power',
                    label: 'Power',
                    value: 1
        },
        {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Device Details'
        }, {
            docked: 'bottom',
            xtype: 'toolbar',
            items: [
                {
                    text: 'Cancel',
                    handler: function() {
                        Ext.getCmp('changeButton').setDisabled(false);
                        Ext.getCmp('editorPanel').hide();
                    }
                }, {
                    xtype: 'spacer'
                }, {
                    text: 'Change',
                    id: 'changeButton',
                    ui: 'action',
                    handler: function() {
                        var formPanel = Ext.getCmp('editorPanel'),
                            formRecord = formPanel.getRecord(),
                            values = formPanel.getValues();

                        if (formRecord) {
                            formRecord.set(values);
                            formRecord.commit();
                        }

                        formPanel.hide();
                    }
                }
            ]
        }]
    }
});


