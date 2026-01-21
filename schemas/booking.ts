import { defineType } from 'sanity'

export default defineType({
    name: 'booking',
    title: '預約申請 (Booking)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: '姓名 (Name)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'phone',
            title: '電話 (Phone)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'nationality',
            title: '國籍 (Nationality)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'checkInDate',
            title: '入住日期 (Check-in)',
            type: 'string', // Storing as ISO string YYYY-MM-DD
            readOnly: true,
        },
        {
            name: 'checkInTime',
            title: '入住時間 (Time)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'checkOutDate',
            title: '退房日期 (Check-out)',
            type: 'string', // Storing as ISO string YYYY-MM-DD
            readOnly: true,
        },
        {
            name: 'checkOutTime',
            title: '退房時間 (Time)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'roomCount',
            title: '房間數量 (Room Count)',
            type: 'number',
            readOnly: true,
        },
        {
            name: 'preferredBedType',
            title: '首選床型 (Bed Type)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'paymentMethod',
            title: '付款方式 (Payment)',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'remarks',
            title: '備註 (Remarks)',
            type: 'text',
            readOnly: true,
        },
        {
            name: 'status',
            title: '狀態 (Status)',
            type: 'string',
            options: {
                list: [
                    { title: '待處理 (Pending)', value: 'pending' },
                    { title: '已確認 (Confirmed)', value: 'confirmed' },
                    { title: '已取消 (Cancelled)', value: 'cancelled' },
                    { title: '已完成 (Completed)', value: 'completed' },
                ],
            },
            initialValue: 'pending',
        },
        {
            name: 'submittedAt',
            title: '提交時間 (Submitted At)',
            type: 'datetime',
            readOnly: true,
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'status',
            date: 'checkInDate'
        },
        prepare(selection) {
            const { title, subtitle, date } = selection
            return {
                title: title,
                subtitle: `${date} | ${subtitle.toUpperCase()}`
            }
        }
    }
})
