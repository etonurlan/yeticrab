import { Modal as GravityModal, TextInput, RadioGroup,
    RadioGroupOption, TextArea, Button, Label } from "@gravity-ui/uikit"
import { useState, useEffect } from "react"
import { App } from "@/App"
import "./ModalEdit.scss"

export const ModalEdit = ({open, setOpen, app, tableData, index}: {
    open: boolean, setOpen: Function, app: App | null, tableData: App[], index: number | null
}) => {
    const [editedApp, setEditedApp] = useState({...app});
    useEffect(() => {
        setEditedApp({...app});
    }, [app]);
    
    const options: RadioGroupOption[] = [
        {value: 'Новая', content: 'Новая'},
        {value: 'В работе', content: 'В работе'},
        {value: 'Завершено', content: 'Завершено'},
    ];

    const keysToCheck = ['Номер заявки', 'Фирма клиента', 'ФИО перевозчика',
    'Телефон перевозчика', 'ATI'];
    const isButtonEnabled = keysToCheck.every(key => editedApp.hasOwnProperty(key) && editedApp[key] !== "");

    return (
        <GravityModal open={open} onClose={() => {setOpen(false)}}>
            <p className='modal-params'>
                <span className='modal-span'>Номер заявки: </span>
                <TextInput type="number" errorPlacement={"inside"}
                value={editedApp["Номер заявки"]} 
                errorMessage={"Введите номер заявки"}
                validationState={(editedApp as App)?.['Номер заявки'] == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setEditedApp({
                        ...editedApp,
                        "Номер заявки": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Фирма клиента: </span>
                <TextInput type="text" errorPlacement={"inside"}
                value={editedApp["Фирма клиента"]} 
                errorMessage={"Введите фирму клиента"}
                validationState={(editedApp as App)?.["Фирма клиента"] == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setEditedApp({
                        ...editedApp,
                        "Фирма клиента": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>ФИО перевозчика: </span>
                <TextInput type="text" errorPlacement={"inside"}
                value={editedApp["ФИО перевозчика"]} 
                errorMessage={"Введите ФИО перевозчика"}
                validationState={(editedApp as App)?.["ФИО перевозчика"] == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setEditedApp({
                        ...editedApp,
                        "ФИО перевозчика": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Телефон перевозчика: </span>
                <TextInput type="tel" errorPlacement={"inside"}
                value={editedApp["Телефон перевозчика"]} 
                errorMessage={"Введите телефон перевозчика"}
                validationState={(editedApp as App)?.["Телефон перевозчика"] == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setEditedApp({
                        ...editedApp,
                        "Телефон перевозчика": event.target.value
                    })
                }} />
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Комментарии: </span>
                <div className="modal-comment">
                    <TextArea rows={2}
                    value={editedApp?.['Комментарии']}
                    onChange={(event) => {
                        setEditedApp({
                            ...editedApp,
                            "Комментарии": event.target.value
                        })
                    }} />
                </div>
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Статус заявки: </span>
                <RadioGroup name="group1" defaultValue={options[0].value}
                onUpdate={(value) => setEditedApp({
                    ...editedApp,
                    "Статус заявки": value == "Новая" ? <Label theme='utility'>Новая</Label>
                    : value == "В работе" ? <Label theme='info'>В работе</Label>
                    : value == "Завершено" && <Label theme='success'>Завершено</Label>
                })}>
                    <RadioGroup.Option content={options[0].content} value={options[0].value} />
                    <RadioGroup.Option content={options[1].content} value={options[1].value} />
                    <RadioGroup.Option content={options[2].content} value={options[2].value} />
                </RadioGroup>
            </p>
            <p className='modal-params'>
                <span className='modal-span'>ATI: </span>
                <TextInput type="url" errorPlacement={"inside"}
                value={editedApp.ATI} 
                errorMessage={"Введите ATI"}
                validationState={(editedApp as App)?.ATI == "" ? "invalid" : undefined} 
                onChange={(event) => {
                    setEditedApp({
                        ...editedApp,
                        ATI: event.target.value
                    })
                }} />
            </p>
            <Button className="button" view="action" size="l"
            disabled={!isButtonEnabled}
            onClick={() => {
                tableData[index] = editedApp
                setOpen(false)
            }}>
                Добавить    
            </Button>       
        </GravityModal>
    )
}