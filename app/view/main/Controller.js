Ext.define('App.view.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onCreateWorkerClick: function() {
        var worksStore = Ext.create('MyApp.store.Works');
        worksStore.load();

        var form = Ext.create('Ext.form.Panel', {
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Имя',
                name: 'first_name'
            },{
                xtype: 'textfield',
                fieldLabel: 'Фамилия',
                name: 'second_name'
            },{
                xtype: 'textfield',
                fieldLabel: 'Отчество',
                name: 'otchestvo'
            },{
                xtype: 'datefield',
                fieldLabel: 'Дата рождения',
                name: 'date_rojdenia',
                format: 'Y-m-d'
            },{
                xtype: 'combobox',
                fieldLabel: 'Работа',
                name: 'work',
                store: worksStore,
                displayField: 'name_work',
                valueField: 'name_work'
            },{
                xtype: 'textfield',
                fieldLabel: 'Ставка',
                name: 'stavka'
            }]
        });

        Ext.create('Ext.window.Window', {
            title: 'Создать сотрудника',
            modal: true,
            layout: 'fit',
            padding: '10 20 10 20',
            items: form,
            buttons: [{
                text: 'Сохранить',
                handler: function() {
                    var form = this.up('window').down('form').getForm();
                    if (form.isValid()) {
                        Ext.Ajax.request({
                            url: 'http://127.0.0.1:8000/api/worker/',
                            method: 'POST',
                            jsonData: form.getValues(),
                            success: function(response){
                                console.log('Данные о сотруднике успешно сохранены');
                            },
                            failure: function(response){
                                console.error('Ошибка при сохранении данных о сотруднике');
                            }
                        });
                        this.up('window').close();
                    }
                }
            },{
                text: 'Отмена',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }).show();
    },

    onCreatePositionClick: function() {
        // Логика создания должности
        console.log('Создание должности');
    }
});

Ext.define('MyApp.view.workers', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridpanel_workers',
    store: {
        type: 'workers'
    },
    columns: [
        { text: 'Имя', dataIndex: 'first_name' },
        { text: 'Фамилия', dataIndex: 'second_name' },
        { text: 'Отчество', dataIndex: 'otchestvo' },
        { text: 'Дата рождения', dataIndex: 'date_rojdenia', xtype: 'datecolumn', format: 'd.m.Y' },
        { text: 'Работа', dataIndex: 'work' },
        { text: 'Ставка', dataIndex: 'stavka' },
        { text: 'Зарплата', dataIndex: 'salary' }
    ],
    height: 400,
    width: 600,
    title: 'Таблица работников'
});

Ext.define('MyApp.view.works', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridpanel_works',
    store: {
        type: 'works'
    },
    columns: [
        { text: 'Должность', dataIndex: 'name_work' },
        { text: 'Максимальное число работников', dataIndex: 'max_workers' },
        { text: 'Оклад', dataIndex: 'zarplata' },
    ],
    height: 400,
    width: 600,
    title: 'Таблица должностей'
});
