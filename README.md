Методы
	GET /applications: Получить список всех заявок.
	POST /applications: Создать новую заявку.
	GET /applications/{id}: Получить информацию о заявке с указанным идентификатором.
	PUT /applications/{id}: Обновить информацию о заявке с указанным идентификатором.
	DELETE /applications/{id}: Удалить заявку с указанным идентификатором.
Поля
	id (integer): Уникальный идентификатор заявки.
	number (string): Номер заявки.
	datetime (string): Дата и время получения заявки от клиента (формат: YYYY-MM-DDTHH:MM:SS).
	clientCompany (string): Название фирмы клиента.
	carrierFullName (string): ФИО перевозчика.
	carrierPhone (string): Контактный телефон перевозчика.
	comments (string, optional): Комментарии к заявке.
	status (string): Статус заявки (new, in_progress, completed).
	ati (string): ATI код сети перевозчика.
