import { defineType } from 'sanity'

export default defineType({
    name: 'contact',
    title: '聯絡我們 (Contact)',
    type: 'document',
    fields: [
        {
            name: 'founderImage',
            title: '創辦人照片',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'founderName',
            title: '創辦人姓名',
            type: 'string',
        },
        {
            name: 'founderBio',
            title: '創辦人簡介',
            type: 'text',
        },
        {
            name: 'founderTitle',
            title: '創辦人稱謂 (如: 創辦人)',
            type: 'string',
        },
        {
            name: 'founderSubtitle',
            title: '創辦人副標題 (如: 巴生·班達馬蘭新村人...)',
            type: 'string',
        },
        {
            name: 'facebookHandle',
            title: 'Facebook 顯示文字',
            type: 'string',
        },
        {
            name: 'facebookLink',
            title: 'Facebook 連結',
            type: 'url',
        },
        {
            name: 'instagramHandle',
            title: 'Instagram 顯示文字',
            type: 'string',
        },
        {
            name: 'instagramLink',
            title: 'Instagram 連結',
            type: 'url',
        },
        {
            name: 'whatsappHandle',
            title: 'WhatsApp 顯示文字',
            type: 'string',
        },
        {
            name: 'whatsappLink',
            title: 'WhatsApp 連結',
            type: 'url',
        },
    ],
})
