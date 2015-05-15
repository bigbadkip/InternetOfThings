
 // This is used by the NestedList to allow editing of an item in the Store
 
Ext.define('IoT.view.EditorPanelCV', {
    extend: 'Ext.form.Panel',
    id: 'editorPanelCV',
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
                    label: 'Thermostaat',
                    minValue: 14,
                    maxValue: 35,
                    increment: 0.5,
                    cycle: false
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
                        Ext.getCmp('editorPanelCV').hide();
                    }
                }, {
                    xtype: 'spacer'
                }, {
                    text: 'Change',
                    id: 'changeButton',
                    ui: 'action',
                    handler: function() {
                        var formPanel = Ext.getCmp('editorPanelCV'),
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
