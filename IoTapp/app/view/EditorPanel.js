
 // This is used by the NestedList to allow editing of an item in the Store
 
Ext.define('IoT.view.EditorPanel', {
    extend: 'Ext.form.Panel',
    id: 'editorPanel',
    config: {
        modal: true,
        hideOnMaskTap: false,
        centered: true,
        width: '90%',
        scrollable: null,
        items: [{
            xtype: 'textfield',
            name: 'text',
            label: 'Name',
            listeners: {
                keyup: function(field) {
                    Ext.getCmp('changeButton').setDisabled(field.getValue() ? false : true);
                }
            }
        },
        {
                    xtype: 'spinnerfield',
                    label: 'Dimmen',
                    minValue: 0,
                    maxValue: 100,
                    increment: 5,
                    cycle: false
        },
        {
                    xtype: 'togglefield',
                    name: 'power',
                    label: 'Power',
                    value: 1
                    //,labelWidth: '40%'
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
