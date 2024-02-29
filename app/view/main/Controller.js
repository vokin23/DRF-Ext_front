Ext.define('App.view.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onCreateWorkerClick: function() {
        var worksStore = Ext.create('MyApp.store.Works'); // Создаем хранилище работ
        worksStore.load(); // Загружаем данные о работах

        Ext.create('Ext.window.Window', {
            title: 'Создать сотрудника',
            modal: true,
            layout: 'fit',
            padding: '10 20 10 20',
            items: {
                xtype: 'form',
                defaultType: 'textfield',
                padding: '20 0 0 0',
                items: [{
                    fieldLabel: 'Имя',
                    name: 'first_name'
                },{
                    fieldLabel: 'Фамилия',
                    name: 'second_name'
                },{
                    fieldLabel: 'Отчество',
                    name: 'otchestvo'
                },{
                    fieldLabel: 'Дата рождения',
                    name: 'date_rojdenia',
                    xtype: 'datefield',
                    format: 'd.m.Y'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Работа',
                    name: 'work',
                    store: worksStore,
                    displayField: 'name_work', // Поле для отображения рабочей должности
                    valueField: 'name_work' // Уникальный идентификатор рабочей должности
                },{
                    fieldLabel: 'Ставка',
                    name: 'stavka'
                },{
                    fieldLabel: 'Зарплата',
                    name: 'salary'
                }],
                buttons: [{
                    text: 'Сохранить',
                    handler: function() {
                        // Логика сохранения данных
                    }
                },{
                    text: 'Отмена',
                    handler: function() {
                        this.up('window').close();
                    }
                }]
            }
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
