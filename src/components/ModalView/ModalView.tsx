import { Modal as GravityModal } from "@gravity-ui/uikit"
import { App } from "@/App"
import "./ModalView.scss"

export const ModalView = ({open, setOpen, app}: {
    open: boolean, setOpen: Function, app: App | null
}) => {
    return (
        <GravityModal open={open} onClose={() => setOpen(false)}>
            <p className='modal-params'>
                <span className='modal-span'>Номер заявки: </span>
                {app?.["Номер заявки"]}
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Дата и время: </span>
                {app?.['Дата и время']}
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Фирма клиента: </span>
                {app?.['Фирма клиента']}
            </p>
            <p className='modal-params'>
                <span className='modal-span'>ФИО перевозчика: </span>
                {app?.['ФИО перевозчика']}
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Телефон перевозчика: </span>
                {app?.['Телефон перевозчика']}
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Комментарии: </span>
                <div className="modal-comment">
                    {app?.['Комментарии']}
                </div>
            </p>
            <p className='modal-params'>
                <span className='modal-span'>Статус заявки: </span> 
                {app?.['Статус заявки']}
            </p>
            <p className='modal-params'>
                <span className='modal-span'>ATI: </span>
                <a href={app?.['ATI']} target="_blank">{app?.['ATI']}</a>
            </p>      
        </GravityModal>
    )
}