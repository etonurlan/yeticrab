import { Table } from './components/Table';
import { ModalView } from './components/ModalView';
import { ModalCreate } from './components/ModalCreate';
import { ModalEdit } from './components/ModalEdit';
import { useState } from 'react';
import { data } from './data';
import { Switch } from '@gravity-ui/uikit';

export interface App {
    'Номер заявки': string;
    'Дата и время': string;
    'Фирма клиента': string;
    'ФИО перевозчика': string;
    'Телефон перевозчика': string;
    'Комментарии'?: string;
    'Статус заявки': any;
    'ATI': string;
}

const App = () => {
    const [openView, setOpenView] = useState(false)
    const [openCreate, setOpenCreate] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [app, setApp] = useState<App | null>(null)
    const [tableData, setTableData] = useState(data);
    const [index, setIndex] = useState(null)
    const [admin, setAdmin] = useState(false) 

    return (
        <>
            <Switch onUpdate={(checked) => setAdmin(checked)}
            className='switch' content="Режим администратора" size='l' />
            <ModalCreate open={openCreate} setOpen={setOpenCreate}
            setTableData={setTableData} tableData={tableData} />
            <ModalView app={app} open={openView} setOpen={setOpenView} />
            <ModalEdit app={app} open={openEdit} setOpen={setOpenEdit}
            tableData={tableData} index={index} />
            <div className='app'>
                <Table setOpenView={setOpenView} setOpenCreate={setOpenCreate} 
                setApp={setApp} setTableData={setTableData} tableData={tableData}
                setOpenEdit={setOpenEdit} setIndex={setIndex} admin={admin} />
            </div>
        </>
    );
};

export default App;