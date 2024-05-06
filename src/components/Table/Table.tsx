import { Table as GravityTable, withTableActions, withTableSorting,
    Checkbox, TextInput
} from '@gravity-ui/uikit';
import { App } from '@/App';
import { Button, Icon } from '@gravity-ui/uikit';
import { Plus } from '@gravity-ui/icons';
import "./Table.scss"
import { useState } from 'react';

export const Table = ({setOpenView, setOpenCreate, setApp, tableData, setTableData,
    setOpenEdit, setIndex, admin}:
    {setOpenView: Function, setOpenCreate: Function, setApp: Function, admin: boolean,
        tableData: App[], setTableData: Function, setOpenEdit: Function, setIndex: Function
    }) => {
    const [hideCompleted, setHideCompleted] = useState(false);
    const [searchText, setSearchText] = useState('');
    
    const AppTable = withTableActions(withTableSorting(GravityTable));

    const columns = [{id: 'Номер заявки'}, {id: 'Статус заявки'},
        {id: 'Дата и время', 
        meta: {defaultSortOrder: 'desc',
        sort: (a: App, b: App) => Date.parse(a?.['Дата и время']) - Date.parse(b?.['Дата и время'])}},
        {id: 'Фирма клиента'}];

    const getRowActions = (item: any, index: number) => {
        return [
            {
                text: 'Просмотреть',
                handler: () => {
                    setOpenView(true)
                    setApp(item)
                },
            },
            {
                text: 'Редактировать',
                handler: () => {
                    setOpenEdit(true)
                    setIndex(index)
                    setApp(item)
                }
            },
            {
                text: 'Удалить',
                handler: () => {
                    const newData = [...tableData]
                    newData.splice(index, 1)
                    setTableData(newData);
                },
                theme: 'danger',
            },
        ];
    };

    const filteredData = tableData.filter(
        (item) =>
            (!hideCompleted || item['Статус заявки'].props.children !== 'Завершено') &&
            (!searchText ||
                item['Фирма клиента']
                    .toLowerCase()
                    .includes(searchText.toLowerCase()))
    );

    return (
        <>
            <div className='filtered'>
                <Checkbox content="Скрыть завершенные" size="l" checked={hideCompleted}
                onChange={() => setHideCompleted(!hideCompleted)}
                className='checkbox' />
                <TextInput placeholder="Поиск по фирме клиента"
                value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </div>
            
            {admin ? (
                <>
                    <AppTable className='table' 
                    data={filteredData}
                    columns={columns} getRowActions={getRowActions} />
                    <Button onClick={() => setOpenCreate(true)} view="action" size="l">
                        <Icon data={Plus} size={18} />
                        Добавить
                    </Button>
                </>
            ) : (
                <AppTable className='table' 
                data={filteredData}
                columns={columns} />
            )}
        </>
    )
}