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
            title: '創辦人姓名 (中文)',
            type: 'string',
        },
        {
            name: 'founderName_en',
            title: 'Founder Name (English)',
            type: 'string',
        },
        {
            name: 'founderBio',
            title: '創辦人簡介 (中文)',
            type: 'text',
        },
        {
            name: 'founderBio_en',
            title: 'Founder Bio (English)',
            type: 'text',
        },
        {
            name: 'founderTitle',
            title: '創辦人稱謂 (中文)',
            type: 'string',
        },
        {
            name: 'founderTitle_en',
            title: 'Founder Title (English)',
            type: 'string',
        },
        {
            name: 'founderSubtitle',
            title: '創辦人副標題 (中文)',
            type: 'string',
        },
        {
            name: 'founderSubtitle_en',
            title: 'Founder Subtitle (English)',
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

