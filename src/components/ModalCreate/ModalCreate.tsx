import { Modal as GravityModal, TextInput, TextArea, Button, Label } from "@gravity-ui/uikit"
import { DateField } from "@gravity-ui/date-components"
import {DateTime} from '@gravity-ui/date-utils';

import "./ModalCreate.scss"
import { useState } from "react"
import { App } from "@/App"

export const ModalCreate = ({open, setOpen, setTableData, tableData }: {
    open: boolean, setOpen: Function, setTableData: Function, tableData: App[] }) => {

    const [newApp, setNewApp] = useState<App | object>({
        "Статус заявки": <Label theme='utility'>Новая</Label>
    })

    const keysToCheck = ['Номер заявки', 'Дата и время', 'Фирма клиента', 'ФИО перевозчика',
    'Телефон перевозчика', 'ATI'];
    const isButtonEnabled = keysToCheck.every(key => newApp.hasOwnProperty(key) && newApp[key] !== "");

    return (
        <GravityModal open={open} onClose={() => setOpen(false)}>
            <p className='modal-params'>
                <span className='modal-span'>Номер заявки: </span>
                <TextInput type="number" errorPlacement={"inside"} 
                errorMessage={"Введите номер заявки"}
                validationState={(newApp as App)?.['Номер заявки'] == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setNewApp({
                        ...newApp,
                        "Номер заявки": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Дата и время: </span>
                <DateField format="YYYY/MM/DD"
                onUpdate={(value: DateTime | null) => {
                    const date = value?.toDate()!
                    var year = date.getFullYear();
                    var month = ('0' + (date.getMonth() + 1)).slice(-2);
                    var day = ('0' + date.getDate()).slice(-2);
                    var formattedDate = year + '-' + month + '-' + day;
                    setNewApp({
                        ...newApp,
                        "Дата и время": formattedDate
                    })
                }} />

            </p>
            <p className='modal-params'>
                <span className='modal-span'>Фирма клиента: </span>
                <TextInput type="text" errorPlacement={"inside"} 
                errorMessage={"Введите фирму клиента"}
                validationState={(newApp as App)?.['Фирма клиента'] == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setNewApp({
                        ...newApp,
                        "Фирма клиента": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>ФИО перевозчика: </span>
                <TextInput type="text" errorPlacement={"inside"} 
                errorMessage={"Введите ФИО перевозчика"}
                validationState={(newApp as App)?.['ФИО перевозчика'] == "" ? "invalid" : undefined}
                onChange={(event) => {
                    setNewApp({
                        ...newApp,
                        "ФИО перевозчика": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Телефон перевозчика: </span>
                <TextInput type="tel" errorPlacement={"inside"} 
                errorMessage={"Введите телефон перевозчика"}
                validationState={(newApp as App)?.['Телефон перевозчика'] == "" ? "invalid" : undefined}
                onChange={(event) => {
                    setNewApp({
                        ...newApp,
                        "Телефон перевозчика": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Комментарии: </span>
                <TextArea rows={2}
                onChange={(event) => {
                    setNewApp({
                        ...newApp,
                        "Комментарии": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>ATI: </span>
                <TextInput type="url" errorPlacement={"inside"} 
                errorMessage={"Введите ATI"}
                validationState={(newApp as App)?.['ATI'] == "" ? "invalid" : undefined}
                onChange={(event) => {
                    setNewApp({
                        ...newApp,
                        "ATI": event.target.value
                    })
                }} />
            </p>
            <Button className="button" view="action" size="l"
            disabled={!isButtonEnabled}
            onClick={() => {
                const newData = [...tableData]
                newData.push(newApp)
                setTableData(newData)
                setNewApp({"Статус заявки": <Label theme='utility'>Новая</Label>})
                setOpen(false)
            }}>
                Добавить    
            </Button>      
        </GravityModal>
    )
}