export default {
    name: 'announcement',
    title: '最新公告',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '標題',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'date',
            title: '日期',
            type: 'date',
            options: {
                dateFormat: 'YYYY.MM.DD',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: '分類',
            type: 'string',
            options: {
                list: [
                    { title: '最新', value: 'latest' },
                    { title: '活動', value: 'event' },
                    { title: '公告', value: 'announcement' },
                ],
            },
            initialValue: 'latest',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'link',
            title: 'Facebook 貼文連結',
            type: 'url',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'isNewBadge',
            title: '顯示「最新」標籤',
            type: 'boolean',
            initialValue: true,
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
    },
}
