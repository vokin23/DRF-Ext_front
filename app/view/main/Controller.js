Ext.define('App.view.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main'
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
