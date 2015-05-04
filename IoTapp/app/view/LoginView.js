
Ext.define('IoT.view.LoginView', {
    xtype: 'LoginView',
    extend: 'Ext.NestedList',
    requires: [
        'Ext.data.TreeStore',
        'IoT.model.Device',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.Label',
        'Ext.Img'
    ],

    config: {

        items: [
                     
                    // {
                    //     xtype: 'label',
                    //     html: 'Login failed. Please enter the correct credentials.',
                    //     itemId: 'signInFailedLabel',
                    //     hidden: true,
                    //     hideAnimation: 'fadeOut',
                    //     showAnimation: 'fadeIn',
                    //     style: 'color:#990000;margin:5px 0px;'
                    // },
                    {
                         xtype: 'image',
                         src: Ext.Viewport.getOrientation() == 'portrait' ? 'lock.png' : 'lock.png',
                         style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:80px;height:80px;margin:auto' : 'width:40px;height:40px;margin:auto'
                     },
                    {
                        xtype: 'fieldset',
                        height: '175px',
                        title: 'Login',
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'Username',
                                itemId: 'userNameTextField',
                                name: 'userNameTextField',
                                required: true
                            },
                            {
                                xtype: 'passwordfield',
                                placeHolder: 'Password',
                                itemId: 'passwordTextField',
                                name: 'passwordTextField',
                                required: true
                            }
                        ]
                    },
                                                {
                                xtype: 'button',
                                itemId: 'logInButton',
                                ui: 'action',
                                padding: '10px',
                                text: 'Log In',
                            }
                    
         ]
    }

});
